const express = require('express');
const router = express.Router();
const externalApiController = require('../controllers/externalApiController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/weather', authMiddleware, externalApiController.getWeather);  // Protected by JWT
router.get('/quote', authMiddleware, externalApiController.getQuote);      // Protected by JWT
router.post('/generate-text', authMiddleware, externalApiController.generateText); // Protected by JWT

module.exports = router;
