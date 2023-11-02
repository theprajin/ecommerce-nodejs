const express = require("express");

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

const { getSingleProductReviews } = require("../controllers/reviewController");

const {
  authenticateUser,
  authorizePermission,
} = require("../middleware/authentication");

const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post([authenticateUser, authorizePermission("admin")], createProduct);

router
  .route("/upload-image")
  .post([authenticateUser, authorizePermission("admin")], uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermission("admin")], updateProduct)
  .delete([authenticateUser, authorizePermission("admin")], deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
