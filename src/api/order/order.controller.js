const orderService = require("../../services/order.service");

exports.submitOrder = async (request, response) => {
    try {
        orderService.submitOrder(request.body)
        response.status(200)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}