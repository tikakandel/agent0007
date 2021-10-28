const { AuthenticationError } = require('apollo-server-express');
const { User, Client, Agents } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }, context) => {
      if (context.user.role === "manager") {
        User.find();
      }
      else if (context.user.role === "admin") {
        User.find();
      }
      else if (context.user.role === "agent") {
      User.find();
    }
    return User.findOne({ _id: userId });
  },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    agents: async () => await Agents.find({}).populate('Clients')
     


  },
 
  Mutation: {
    addUser: async (parent, {email, password, role}) => {
      const user = await User.create({email, password, role});
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
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
    addNewClient: async (parent, {name, email, phone, applicationID, agent }) => {
      const client = await Client.create({name, email, phone, applicationID, agent});
    
      return client ;
  },

  
  },
};

module.exports = resolvers;
