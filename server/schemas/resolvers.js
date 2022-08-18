const { AuthenticationError } = require('apollo-server-express');
const { User, Note } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ email: context.user.email });
      }
      throw new AuthenticationError('You must be signed in');
    },
    async getNote(root, { _id }) {
      return await Note.findById(_id);
    },
    async allNotes() {
      return await Note.find();
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    async createNote(root, { title, content }) {
      return await Note.create({ title, content });
    },

    async updateNote(root, { _id, input }) {
      console.log("working")
      return await Note.findOneAndUpdate({ _id }, input, { new: true })
    },
    async deleteNote(root, { _id }) {
      return await Note.findOneAndRemove({ _id });
    }
  },
};

module.exports = resolvers;
