import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  const sortByFriendsCount = (a, b) => a.friends.length - b.friends.length;
  const user = users.sort(sortByFriendsCount);
  const names = user.map((user) => user.name);
  return names;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
