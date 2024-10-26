import express from 'express';
import mongoose from 'mongoose';
import { Booking as bookingsRouter } from './routes/Booking.js';
import { ListingAndReivews as listingsRouter } from './routes/ListingAndReivews.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

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
app.use('/api/bookings', bookingsRouter);
app.use('/api/listings', listingsRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
