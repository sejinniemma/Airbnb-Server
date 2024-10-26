import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  client_id: { type: String, required: true },
  name: { type: String, required: true },
  postalAddress: { type: String, required: true },
  homeAddress: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  mobile: { type: String, required: true },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
