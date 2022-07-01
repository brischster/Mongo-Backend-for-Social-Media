const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
} = require("../../controllers/userControllers");

//api/users
router.route("/").get(getUsers).post(createUser);

//api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser);

//api/user/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;
