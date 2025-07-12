const express = require('express');
const router = express.Router(); 
const { login, signup, register, loginPage } = require('./controllers/userController');


router.get('/login', loginPage);
router.get('/signup', signup);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
