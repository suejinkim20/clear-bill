const { AuthenticationError } = require('apollo-server-express')
const { User, Bill } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {

                const user = await User.findOne({ _id: context.user._id }).populate({
                    path: 'bills',
                    populate: {
                        path: 'billOwner'
                    }
                });

                return user;
            } 
            throw new AuthenticationError('Not Logged In');
        },
        myBills: async (parent, args, context) => {
            if (context.user) {
                const userBills = await Bill.find({ billOwner: context.user._id }).populate({
                    path: 'billOwner',
                    populate: 'User'
                }).sort({ dueDate: -1 });
                
                return userBills;

            }
            throw new AuthenticationError('Not logged In!');
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
        addTestBill: async (parent, { category, company, dueDate, amount, paymentStatus, billOwner }) => {
  
            const bill = await Bill.create({ category, company, dueDate, amount, paymentStatus, billOwner });
  
            await User.findOneAndUpdate(
                { _id: billOwner },
                { $addToSet: { bills: bill._id } }
              );

            return bill;
        },
        updateTestBill: async (parent, { _id, category, company, dueDate, amount, paymentStatus, billOwner }) => {
        
            const bill = await Bill.findOneAndUpdate(
                { _id: _id }, 
                { category, company, dueDate, amount, paymentStatus, billOwner },
                { new: true }
                );
  
            return bill;
        },
        addBill: async (parent, { category, company, dueDate, amount, paymentStatus }, context) => {
            if (context.user) {
                const bill = await Bill.create({ category, company, dueDate, amount, paymentStatus, ['billOwner']: context.user._id  });
                
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { bills: bill._id } }
                  );

                return bill;
            }
            throw new AuthenticationError('Not Logged In')
        },
        updateBill: async (parent, { _id, category, company, dueDate, amount, paymentStatus }, context) => {
        
            if (context.user) {
                const bill = await Bill.findOneAndUpdate(
                    { _id: _id }, 
                    { category, company, dueDate, amount, paymentStatus },
                    { new: true }
                    );
      
                return bill;
            }
            throw new AuthenticationError('Not Logged In')
        },
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
      
            return { token, user };
        },
    }
}
module.exports = resolvers;