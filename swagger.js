const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Node Ecommerce API",
    description: "API of ecommerce project build with Express.js",
  },

  host: "ecommerce-node-mzav.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];

swaggerAutogen(outputFile, routes, doc);
