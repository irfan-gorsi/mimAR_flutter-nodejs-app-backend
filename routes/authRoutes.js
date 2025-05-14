const express = require('express');
const router = express.Router();
const { signup, login, getAllUsers } = require('../controllers/authcontroller');
const authMiddleware = require('../middlewares/authMiddleware');

// Public Routes
router.post('/signup', signup);
router.post('/login', login);

// Protected Route (Only logged-in users can access this)
router.get('/users', authMiddleware, getAllUsers);

module.exports = router;
