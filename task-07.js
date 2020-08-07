import users from "./users.js";

const calculateTotalBalance = (users) => {
  const balance = users.reduce((acc, user) => acc + user.balance, 0);
  return balance;
};

console.log(calculateTotalBalance(users)); // 20916
