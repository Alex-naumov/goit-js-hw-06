import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const getSkills = (users) =>
    users.reduce((skills, user) => {
      skills.push(...user.skills);
      return slills;
    }, []);
  const skills = getSkills(users);
  const allSkills = skills
    .filter((currentUser, index, array) => array.indexOf(currentUser) === index)
    .sort();
  return allSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
