// routes/bookings.js
import express from 'express';
import Booking from '../models/Booking.js';
import Client from '../models/Clients.js';
import mongoose from 'mongoose';

const router = express.Router();

// Create a booking
router.post('/', async (req, res) => {
  const {
    listing_id,
    arrival_date,
    departure_date,
    name,
    phone,
    mobile,
    postalAddress,
    homeAddress,
    email,
  } = req.body;
  console.log(`req bodty =>`, req.body);
  // 새로운 Client 인스턴스를 생성하여 client_id를 설정
  const newClient = new Client({
    client_id: new mongoose.Types.ObjectId(),
    name,
    phone,
    mobile,
    postalAddress,
    homeAddress,
    email,
  });
  console.log(`name =>`, { name });
  try {
    // Client 저장
    const savedClient = await newClient.save();
    const newBooking = new Booking({
      booking_id: new mongoose.Types.ObjectId(),
      listing_id,
      client_id: savedClient.client_id,
      arrival_date: new Date(arrival_date),
      departure_date: new Date(departure_date),
    });

    const savedBooking = await newBooking.save();
    res.status(201).json({ booking: savedBooking, client: savedClient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    console.log(`bookings =>`, { bookings });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
