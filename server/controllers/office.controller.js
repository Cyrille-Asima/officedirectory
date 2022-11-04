const Office = require ('../models/office.model')


module.exports = {
    getWorkers:(req,res)=>{
        Office.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    getOneWorker:(req,res)=>{
        Office.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })

    },
    addAWorker:(req,res)=>{
        Office.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })

    },
    updateWorker:(req,res)=>{
        Office.updateOne({_id:req.params.id}, req.body,{new:true,runValidators:false})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })

    },
    deleteWorker:(req,res)=>{
        Office.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    }











}