// models/payment.model.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  paymentOption: { type: String, required: true },
  currency: { type: String, required: true },
  invoiceNumber: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  billTo: { type: String, required: true },
  employerName: { type: String, required: true },
  companyName: { type: String, required: true },
  items: [
    {
      description: { type: String, required: true },
      rate: { type: Number, required: true },
      hours: { type: Number, required: true },
      amount: { type: Number, required: true },
    }
  ],
  notes: { type: String },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
