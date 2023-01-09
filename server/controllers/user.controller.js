const User = require ('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET= process.env.SECRET_KEY 

module.exports = {
    // registerUser(req, res) {
    //     const user = new User(req.body);
    //     user
    //     .save()
    //     .then(()=>{
    //         res.json({msg:"success", user: user});
    //     })
    //     .catch(err => res.status(400).json(err));
    // },

    registerUser: async (req,res) =>{
                try{
                    const newUser = await User.create(req.body)
                    console.log(newUser)
                    const userToken = jwt.sign({_id:newUser._id,email:newUser.email}, SECRET)
                    res.status(201).cookie('userToken',userToken,{httpOnly:true,expires:new Date(Date.now() + 900000)}).json({ successMessage:'User logged in',user:newUser})
                }catch(error){
                    res.status(400).json(error)
        
                }
            },

    loginUser(req,res) {
        User.findOne({email:req.body.email})
        .then(user => {
            if (user === null){
                res.status(400).json({error:"invalid email or password"});
            }else {
                bcrypt
                .compare(req.body.password, user.password)
                .then(passwordIsValid => {
                    if (passwordIsValid){
                        res
                        .cookie(
                            "userToken",
                            jwt.sign({_id:user._id, email:user.email}, SECRET),
                            {
                                httpOnly:true
                            }
                        )
                        .json({error:"success"});
                    } else {
                        res.status(400).json({error:"invalid password"});
                    }
                })
                .catch(err =>
                    res.status(400).json({error:"invalid login attempt"})
                );
            }
        })
        .catch(err => res.json(err));
    },


    logOutUser: (req,res)=>{
        res.clearCookie('userToken')
        res.json({success:'User Logged Out'})
    }
    
}


// module.exports = {
//     registerUser: async (req,res) =>{
//         try{
//             const newUser = await User.create(req.body)
//             console.log(newUser)
//             const userToken = jwt.sign({_id:newUser._id,email:newUser.email}, SECRET)
//             res.status(201).cookie('userToken',userToken,{httpOnly:true,expires:new Date(Date.now() + 900000)}).json({ successMessage:'User logged in',user:newUser})
//         }catch(error){
//             res.status(400).json(error)

//         }
//     },
//     loginUser: async (req,res) => {
//         const user = await User.findOne({email:req.body.email})
//         if(!user){
//             return res.status(400).json({error:"Invalid email"})
//         }

//         try{
//             const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
//             console.log(isPasswordValid)
//             if(!isPasswordValid){
//                 return res.status(400).json({error:"Invalid email/password"})
//             }else{
//                 const userToken = jwt.sign({_id:user._id,email:user.email},SECRET)
//                 res.status(201).cookie('userToken',userToken,{httpOnly:true,expires:new Date(Date.now() + 900000)}).json({ successMessage:'User logged in',user:user})
//             }
//         }catch(error){
//             return res.status(400).json({error:"Invalid email/password"})
//         }
//     },
//     logOutUser: (req,res)=>{
//         res.clearCookie('userToken')
//         res.json({success:'User Logged Out'})
//     }
// }