import { validateOrder } from './validation.js';
import currentDate from './calender.js';


const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event) => {
    submitOrder()
})

async function submitOrder() {
    if (validateOrder() == true) {
        const order = createOrderObject()
        const orderJSON = JSON.stringify(order, null, 4)

        fetch(`/api/order/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: orderJSON
        })
    }
}


const nameElement = document.getElementById("name-input");
const addressElement = document.getElementById("address-input");
const postNumberElement = document.getElementById("post-number-input");
const postAreaElement = document.getElementById("post-area-display");
const emailElement = document.getElementById("email-input");
const phoneElement = document.getElementById("phone-input");

const passAdultElement = document.querySelector("#pass-types-adult .increment-value")
const passYoungElement = document.querySelector("#pass-types-young .increment-value")
const passChildElement = document.querySelector("#pass-types-child .increment-value")

const calenderTable = document.getElementById("calendarTable")


function createOrderObject() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const orderDate = `${day}/${month}/${year}`;


    const selectedDays = calenderTable.querySelectorAll(".selected");
    let dates = "";

    selectedDays.forEach((day, index)=> {
        if (index == 0) {
            dates += `${day.textContent}/${month}/${year}`;
        }
        else {
            dates += `,${day.textContent}/${month}/${year}`;
        }   
    });


    let tickets = [];
    addTicketObject(passAdultElement, "adult", tickets);
    addTicketObject(passYoungElement, "young", tickets);
    addTicketObject(passChildElement, "child", tickets);


    const order = {
        cost: 1,
        userName: nameElement.value,
        userAddress: addressElement.value,
        userPostNumber: postNumberElement.value,
        userPostArea: postAreaElement.value,
        userEmail: emailElement.value,
        userPhone: phoneElement.value,
        orderDate,
        dates,
        tickets
    };

    return order;
}

function addTicketObject(element, type, ticketArray) {
    const quantity = parseInt(element.textContent);
    if (quantity > 0) {
        const ticketObject = {
            type,
            quantity
        }
        ticketArray.push(ticketObject)
    }
}
