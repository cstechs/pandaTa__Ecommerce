const express = require("express");
const {
  createOrder,
  getOrder,
  getOrderById,
  updateOrder,
} = require("../controllers/order");
const router = express.Router();
router.post("/createOrder", createOrder);
router.get("/", getOrder);
router.get("/:id", getOrderById);
router.patch("/:id", updateOrder);
module.exports = router;
