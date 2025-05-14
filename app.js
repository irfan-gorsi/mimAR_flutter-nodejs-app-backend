const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // Load .env variables

// Connect to MongoDB
connectDB();

// Route files
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes'); // we'll create this soon

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes); // external APIs (weather, quote, gemini)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
