import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  booking_id: { type: String, required: true },
  listing_id: { type: String, required: true },
  client_id: { type: String, required: true },
  arrival_date: { type: Date, required: true },
  departure_date: { type: Date, required: true },
});

// Booking 모델 생성
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
