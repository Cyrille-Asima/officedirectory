const OfficeController = require('../controllers/office.controller')
const { authenticate } = require('../config/jwt.config')


module.exports = (app) => {

    app.get('/api/allWorkers',authenticate, OfficeController.getWorkers)

    app.get('/api/worker/:id',authenticate, OfficeController.getOneWorker)

    app.post('/api/addWorker',authenticate, OfficeController.addAWorker)

    app.put('/api/update/:id',authenticate, OfficeController.updateWorker)

    app.delete('/api/delete/:id',authenticate, OfficeController.deleteWorker)


}