import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  const user = users.filter((user) => user.friends.includes(friendName));
  console.log(user.name);
  return user.name;
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
