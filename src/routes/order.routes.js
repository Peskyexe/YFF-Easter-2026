const express = require('express');
const router = express.Router();

const orderController = require("../api/order/order.controller")

router.post("/submit", orderController.submitOrder)

module.exports = router;