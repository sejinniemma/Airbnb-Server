// routes/bookings.js
import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Create a booking
// router.post('/', async (req, res) => {
//   const booking = new Booking(req.body);
//   try {
//     const savedBooking = await booking.save();
//     res.status(201).json(savedBooking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

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

// Update a booking
// router.patch('/:id', async (req, res) => {
//   try {
//     const updatedBooking = await Booking.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedBooking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Delete a booking
// router.delete('/:id', async (req, res) => {
//   try {
//     await Booking.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Booking deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

export default router;
