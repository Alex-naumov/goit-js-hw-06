import users from "./users.js";

const getUserWithEmail = (users, email) => {
  users.filter((user) => {
    if (user.email === email) {
      console.log(user);
    }
  });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
