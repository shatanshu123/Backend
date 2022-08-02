import express from 'express';
const router=express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js'
router.use('/changepassword', checkUserAuth)
router.use('/loggedUser', checkUserAuth)
router.post('/register', UserController.userRegistration);
router.post('/login', UserController.userLogin);
router.post('/send-reset-password-email',UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token',UserController.userPasswordReset)
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggedUser',UserController.loggedUser)

export default router