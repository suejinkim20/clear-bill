const { AuthenticationError } = require('apollo-server-express')
const { User, Bill } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        // user: async (parent, args, context) => {
        //     if (context.user) {
        //       const user = await User.findById(context.user.id).populate('bills')
        //       return user;
        //     }
      
        //     throw new AuthenticationError('Not logged in');
        // },
        users: async () => {
            return await User.find({}).populate('bills')
        },
        // bill: async (parent, { id }, context) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user.id).populate('bills')
                
        //         return user.bills.id(id)

        //     }
        //     throw new AuthenticationError('Not logged in');
        // },
        bills: async () => {
            return Bill.find().sort({ dueDate: -1})
        }
    },
    Mutation: {
        addBill: async (parent, { category, description, dueDate, amount, paymentLink, paymentHints, autoPay, paymentStatus }) => {
            return Bill.create({ category, description, dueDate, amount, paymentLink, paymentHints, autoPay, paymentStatus })
        },
        // removeBill: async (parent, { billId }) => {
        //     return Bill.findOneAndDelete({ _id: billId })
        // },
        // averageBills: async (parent, { category, amount }) => {
            
        //     return Bill.find({category: {category}})
        // },
        // billsByCategory: async (parent, {category, amount}) => {
        //     return Bill.find({category})
        // },
        // markBillPaid: async (parent, { billId }) => {
        //     return Bill.findByIdAndUpdate(
        //         { _id: billId },
        //         { new: true }
        //         )
        // },
        // login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });
        //     if (!user) {
        //       throw new AuthenticationError('Incorrect credentials');
        //     }
        //     const correctPw = await user.isCorrectPassword(password);
        //     if (!correctPw) {
        //       throw new AuthenticationError('Incorrect credentials');
        //     }
        //     const token = signToken(user);
      
        //     return { token, user };
        //   },
    
      
    }
}
module.exports = resolvers;