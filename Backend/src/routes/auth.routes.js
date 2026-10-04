const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @route /api/auth/register
 * @description user regsiter using username, email and password
 * @access Public
 */
authRouter.post('/register', authController.userRegisterController);

/**
 * @route /api/auth/login
 * @description user login using username or email and password
 * @access Public
 */

authRouter.post('/login', authController.userLoginController);

/**
 * @route /api/auth/verify-email
 * @description user verify their email by using sended code.
 * @access Public
 */
authRouter.post('/verify-email', authController.verifyEmailController);

/**
 * @decription Create a new short lived access token using refresh token cookie.
 * @access Public
 */
authRouter.post('/refresh', authController.refreshAccessTokenController);

/**
 * Verify the short lived access token sent as: 
 * Authorization: Bearer <accessToken>
 */
authRouter.get('/get-me', authMiddleware.authUser, authController.getMeController);

/**
 * @route /api/auth/logout
 * @description logout from the current session.
 * @access Private
 */
authRouter.get('/logout', authMiddleware.authUser, authController.logoutController);


module.exports = authRouter