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
  paymentHints: {
    type: String
  },
  autoPay: {
    type: Boolean
  },
  paymentStatus: {
    type: Boolean
  },
  billOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }

});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;