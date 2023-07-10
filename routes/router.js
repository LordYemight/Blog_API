const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const logIn = require('../controllers/login');
const post = require('../controllers/post');
const verifyToken = require('../middlewares/verifyToken');
const getAllPost = require('../controllers/getAllPost');
const getPost = require('../controllers/getPost');
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');
const getAllUser = require('../controllers/getAllUser');
const getUser = require('../controllers/getUser');
const updateUser = require('../controllers/updateUser');


router.post('/api/auth/register', register);
router.post('/api/auth/login', logIn);
router.post('/api/posts', verifyToken, post);
router.get('/api/posts', verifyToken, getAllPost);
router.get('/api/posts/:id', verifyToken, getPost);
router.put('/api/posts/:id', verifyToken, updatePost);
router.delete('/api/posts/:id', verifyToken, deletePost);
router.get('/api/users', verifyToken, getAllUser);
router.get('/api/users/:id', verifyToken, getUser);
router.put('/api/users/:id', verifyToken, updateUser);


module.exports = router;
