import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  const sortByFriendsCount = (a, b) => a.frinds.length - b.frinds.length;
  return users.sort(sortByFriendsCount);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
