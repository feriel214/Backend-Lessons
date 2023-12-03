const express = require("express");
const router = express.Router();

//njib les fonctionnalitées mel controller
const {
  allUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../Controllers/userController");

//get all users
router.get("/getAllUsers", allUsers);

//add user
router.post("/addUser", addUser);

//update user
router.put("/updateUser/:id", updateUser);

//delete user
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
