import express from 'express';
const router = express.Router();
// unique string for when we create a user

import {
  createUser,
  getUsers,
  getAUser,
  deleteUser,
  updateUser
} from '../controllers/users.js';

// all routes in here are starting with /users
router.get('/', getUsers);
//creates a user with firstname lastname and age
router.post('/', createUser);
// gets a user based off uuid
router.get('/:id', getAUser);
// deletes a user with a specific uuid
router.delete("/:id", deleteUser);
//changes info of a user using a uuid
router.patch("/:id", updateUser);

export default router;