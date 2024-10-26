import mongoose from 'mongoose';

// Mongoose 스키마 정의
const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const bookingSchema = new mongoose.Schema({
  booking_id: { type: String, required: true },
  listing_id: { type: String, required: true },
  client_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  arrival_date: { type: Date, required: true },
  departure_date: { type: Date, required: true },
  deposit_paid: { type: Number, required: true },
  balance_due: { type: Number, required: true },
  balance_due_date: { type: Date, required: true },
  number_of_guests: { type: Number, required: true },
  guests: { type: [guestSchema], required: true }, // 배열로 guestSchema 사용
});

// Booking 모델 생성
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
