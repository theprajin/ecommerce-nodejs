const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (!product) {
    throw new CustomError.BadRequestError(
      `Product with id: ${req.params.id} does not exist`
    );
  }
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  res.send("Update Product");
};
const deleteProduct = async (req, res) => {
  res.send("Delete Product");
};

const uploadImage = async (req, res) => {
  res.send("Upload Image");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
