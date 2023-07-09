const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const logIn = require('../controllers/login');

router.post('/api/auth/register', register);
router.post('/api/auth/login', logIn);

module.exports = router;