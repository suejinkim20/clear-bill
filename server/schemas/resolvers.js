const { AuthenticationError } = require('apollo-server-express')
const { User, Bill } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        user: async (parent, { profileId }) => {
            console.log(parent, profileId)
            return await User.findOne({ _id: profileId }).populate('bills');
        },
        bills: async (parent, args, context) => {
            if (context.user) {
                const userBills = await Bill.find({ billOwner: context.user._id }).populate({
                    path: 'billOwner',
                    populate: 'User'
                }).sort({ dueDate: -1})
                console.log(parent, args, context)
                return userBills;
            }

            throw new AuthenticationError('Not logged in')
        },
        bill: async (parent, { billId }) => {
            const singleBill = await Bill.findOne({ _id: billId }).populate({
                path: 'billOwner',
                populate: 'User'
            })

            return singleBill;
        },
    },
    Mutation: {
        addBill: async (parent, { category, description, dueDate, amount, paymentLink, paymentHints, autoPay, paymentStatus }) => {
            return Bill.create({ category, description, dueDate, amount, paymentLink, paymentHints, autoPay, paymentStatus })
        },
        removeBill: async (parent, { billId }) => {
            return Bill.findOneAndDelete({ _id: billId })
        },
        billsByCategory: async (parent, {category, amount}) => {
            return Bill.find({category}).sort({ dueDate: -1})
        },
        markBillPaid: async (parent, { billId }) => {
            return Bill.findByIdAndUpdate(
                { _id: billId },
                { new: true }
                )
        },
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                console.log('no user found')
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                console.group('password incorrect')
                console.log('user: ' + user + ', password: ' + password)
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
      
            return { token, user };
          },
    
      
    }
}
module.exports = resolvers;