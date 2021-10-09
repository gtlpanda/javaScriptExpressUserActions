import {
  v4 as uuidv4
} from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


let users = []

// this creates a user
export const createUser = (req, res) => {
  const user = req.body;
  // this ... is a spread operator aka carpet bomb
  // below we are basically createing a new object with firstName, lastName, age and now we are about to add in the special sauce aka the uuid to the json object
  users.push({
    ...user,
    id: uuidv4()
  });
  // users.push(userWithId);
  res.send(`User with the username ${user.firstName} added to the DB.'`);
};

export const getUsers = (req, res) => {

  // console.log(users);
  res.send(users);
};

export const getAUser = (req, res) => {
  const {
    id
  } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};


export const deleteUser = (req, res) => {
  const {
    id
  } = req.params;

  // basically, this is filtering out all the json objects that don't match the user ID you pass through I.E., user user.id doesn't equal id inserted, toss those to the side and if I find one, i'm gonna delete the match.
  users = users.filter((user) => user.id != id);
  res.send(`User with ID ${id} has been deleted.`);
};

export const updateUser = (req, res) => {
  const {
    id
  } = req.params;

  const user = users.find((user) => user.id === id);
  //what can we get back and change out of the json? 
  const {
    firstName,
    lastName,
    age
  } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the ${id} has been updated.`);

};