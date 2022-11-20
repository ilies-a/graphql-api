const users = [
  {
    id: "1",
    name: "User1",
    age: 25,
    email: "user1@domain.com",
    posts: [
      { date: "11-17-2022", content: "Lorem ipsum dolor sit amet" },
      { date: "11-18-2022", content: "Excepteur sint occaecat" },
    ],
  },
  {
    id: "2",
    name: "User2",
    age: 30,
    email: "user2@domain.com",
    posts: [{ date: "11-20-2022", content: "Sed ut perspiciatis unde omnis" }],
  },
];

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function addNewUser(name, age, email) {
  const newUser = {
    id: String(users.length + 1),
    name,
    age,
    email,
    posts: [],
  };

  users.push(newUser);

  return newUser;
}

function addNewPostByUserId(userId, content, date) {
  const fetchedUser = users[users.findIndex((user) => user.id === userId)];

  const newPost = {
    content,
    date,
  };

  fetchedUser["posts"].push(newPost);

  return newPost;
}

module.exports = { getAllUsers, getUserById, addNewUser, addNewPostByUserId };
