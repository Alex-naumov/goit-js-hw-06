import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  const userName = users.filter((user) => user.friends.includes(friendName));
  return userName.name;
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
