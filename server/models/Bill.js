const mongoose = require('mongoose');

const { Schema } = mongoose;

const billSchema = new Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String
  },
  dueDate: {
    type: Date,
  },
  amount : {
    type: Number,
    required: true,
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