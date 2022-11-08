const UserController = require('../controllers/user.controller')

module.exports =(app) => {
    
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.loginUser)
    // app.post('/getLoggedUser',UserController.getLoggedInUser)
    app.get('/api/logout',UserController.logOutUser)

}