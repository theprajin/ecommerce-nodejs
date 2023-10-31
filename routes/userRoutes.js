const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

const {
  authenticateUser,
  authorizePermission,
} = require("../middleware/authentication");

const router = express.Router();

router
  .route("/")
  .get(authenticateUser, authorizePermission("admin"), getAllUsers);

router.route("/show-me").get(showCurrentUser);
router.route("/update-user").patch(updateUser);
router.route("/update-user-password").patch(updateUserPassword);

router.route("/:id").get(getSingleUser);

module.exports = router;
