const express = require('express');
const router = express.Router(); 
const { login, signup, register, loginPage, allUsers } = require('./controllers/userController');
const { requireAuth, logoutAuth } = require('./utils/auth');
const { home, myblogs, addblogs } = require('./controllers/blogController');

router.get('/login', loginPage);
router.get('/signup', signup);
router.post('/register', register);
router.post('/login', login);
router.get('/allUsers', requireAuth, allUsers);
router.post('/logout', logoutAuth);  // Changed to POST
router.get('/', home);
router.get('/home',home);
router.get('/myblogs',myblogs);
router.get('/addblogs',addblogs);

module.exports = router;
