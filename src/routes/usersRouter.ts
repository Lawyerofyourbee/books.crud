const usersRouter = require('express').Router()
const usersController = require("../controllers/usersController")

usersRouter.post('/users/register', usersController.register)
usersRouter.post('/users/login', usersController.login)
usersRouter.get('/users/me', usersController.getUserInfo)
usersRouter.put('/users/:id/role', usersController.updateRole)

export default usersRouter
