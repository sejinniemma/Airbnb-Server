import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  mobile: String,
  postalAddress: String,
  homeAddress: String,
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;