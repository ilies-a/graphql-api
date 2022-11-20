const {
  getAllUsers,
  getUserById,
  addNewUser,
  addNewPostByUserId,
} = require("./users.model");

const resolvers = {
  Query: {
    users: () => getAllUsers(),
    user: (_, { id }) => getUserById(id),
  },
  Mutation: {
    addNewUser: (_, { name, age, email }) => addNewUser(name, age, email),
    addNewPostByUserId: (_, { userId, content, date }) =>
      addNewPostByUserId(userId, content, date),
  },
};

module.exports = resolvers;
