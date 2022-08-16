const router = require('express').Router()
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/users.controller')


//Permet donc de créer des routes qui mènent aux fonctions
//dans les controlleurs
//On les appelera plus tard dans le front


//auth
router.post("/register", authController.signUp)
router.post('/login', authController.signIn)
router.get('/logout', authController.logout)

//user
router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router