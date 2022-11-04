const OfficeController = require('../controllers/office.controller')

module.exports = (app) => {

    app.get('/api/allWorkers',OfficeController.getWorkers)

    app.get('/api/worker/:id',OfficeController.getOneWorker)

    app.post('/api/addWorker',OfficeController.addAWorker)

    app.put('/api/update/:id',OfficeController.updateWorker)

    app.delete('/api/delete/:id',OfficeController.deleteWorker)


}