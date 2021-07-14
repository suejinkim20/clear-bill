const mongoose = require('mongoose');

const { Schema } = mongoose;

const billSchema = new Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  dueDate: {
    type: Date,
  },
  amount : {
    type: Number,
    required: true,
  },
  paymentLink: {
      type: String
  },
  paymentInfo: {
    type: String
  },
  autoPay: {
    type: Boolean
  },
  paymentStatus: {
    type: Boolean
  }
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;