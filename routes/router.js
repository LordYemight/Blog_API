const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const logIn = require('../controllers/login');
const post = require('../controllers/post');
const verifyToken = require('../middlewares/verifyToken');

router.post('/api/auth/register', register);
router.post('/api/auth/login', logIn);
router.post('/api/posts', verifyToken, post);


module.exports = router;