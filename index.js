import express from 'express';
import mongoose from 'mongoose';
import bookingsRouter from './routes/bookingsRouter.js';
import listingsRouter from './routes/listingsRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Router
app.use('/bookings', bookingsRouter);
app.use('/listings', listingsRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
