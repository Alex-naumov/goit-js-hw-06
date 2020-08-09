import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const user = users.filter((user) => user.gender === gender);
  const names = user.map((user) => user.name);
  return names;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
