import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  const eyeColor = users.filter((user) => user.eyeColor === color);
  return eyeColor;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
