const express = require('express');
const router = express.Router(); 
const { login, signup, register, loginPage,allUsers } = require('./controllers/userController');
const requireAuth = require('./utils/auth');


router.get('/login', loginPage);
router.get('/signup', signup);
router.post('/register', register);
router.post('/login', login);
router.get('/allUsers',requireAuth,allUsers);

module.exports = router;
