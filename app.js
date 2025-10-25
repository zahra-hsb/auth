const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('./middleware/rateLimit');
require('dotenv').config();

const app = express();

// اتصال به دیتابیس
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auth_demo')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// میدلورهای امنیتی
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || 'http://localhost:5173/',
  credentials: true
}));
app.use(rateLimit);
app.use(express.json({ limit: '10kb' }));

// routes
app.use('/api/auth', require('./routes/auth'));

// میدلور مدیریت خطاها
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'خطای سرور'
  });
});

// route پیش‌فرض
app.get('/', (req, res) => {
  res.json({ message: 'Auth API is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});