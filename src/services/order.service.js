const prisma = require("../db.js")

exports.submitOrder = async (order) => {
    submitOrder(order);
}


async function submitOrder(order) {
    try {
        const prismaOrder = await prisma.order.create({
            data: {
                cost: order.cost,
                user_name: order.userName,
                user_address: order.userAddress,
                user_post_nbmr: order.userPostNumber,
                user_post_area: order.userPostArea,
                user_email: order.userEmail,
                user_phone: order.userPhone,
                order_date: order.orderDate,
                dates: order.dates,
                tickets: order.tickets
            }
        });

        console.log(prismaOrder);
    } 
    catch(error) {
        console.log(error.message)
    }
}

