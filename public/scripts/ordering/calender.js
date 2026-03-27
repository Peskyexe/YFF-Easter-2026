const calenderLabel = document.getElementById("calendarLabel");
const calenderTable = document.getElementById("calendarTable");
const rowElements = calenderTable.querySelectorAll(".calendar-row");

const rowCount = 6;
const columnCount = 7;
const cellCount = rowCount * columnCount;

let currentDate = new Date();
export default currentDate;


function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    calenderLabel.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    const firstDay = (new Date(year, month, 1).getDay() - 1 + 7) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const rows = createRows(firstDay, daysInMonth);

    rows.forEach((row, index) => {
        rowElements[index].innerHTML = "";
        row.forEach(cell => {
            rowElements[index].appendChild(cell)
        });
    });
}


function createCell(day, isDisabled = false) {
    const cell = document.createElement("td");
    cell.classList.add("calendar-cell");

    if (day && day != "") {
        const cellText = document.createElement("span");
        cellText.textContent = day;
        cell.appendChild(cellText);
    }
    
    if (isDisabled == true) {
        cell.classList.add("disabled");
    }
    else if (isDisabled == false) {
        makeCellSelectable(cell);
    }

    return cell;
}

function createRows(firstDay, daysInMonth) {
    let rows = [];
    let cellIndex = 0;

    for (let row = 0; row < rowCount; row++) {
        let rowArray = []
        for (let cell = 0; cell < columnCount; cell++) {
            // Før månden
            if (cellIndex < firstDay) {
                rowArray.push(createCell("", true));
            }
            // I månden
            else if (cellIndex >= firstDay && cellIndex <= daysInMonth + firstDay - 1) {
                rowArray.push(createCell(String(cellIndex - firstDay + 1)));
            }
            // Etter månden
            else if (cellIndex > daysInMonth + firstDay - 1) {
                rowArray.push(createCell(String(cellIndex - firstDay - daysInMonth + 1), true));
            }
            cellIndex++;
        }
        rows.push(rowArray);
    }

    return rows;
}


function makeCellSelectable(cell) {
    cell.addEventListener("click", () => {
        cell.classList.toggle("selected");
        updateRangeClasses();
    }) 
}

function updateRangeClasses() {
    clearRangeClasses();

    const rows = calenderTable.querySelectorAll(".calendar-row")

    rows.forEach(row => {
        const selectedCells = row.querySelectorAll(".selected")
        const selectionCount = selectedCells.length;

        selectedCells.forEach((cell, index) => {
            if (selectionCount == 1) {
                cell.classList.add("range-single");
            }
            else if (index == 0) {
                cell.classList.add("range-start");
            }
            else if (index == selectionCount - 1) {
                cell.classList.add("range-end");
            }
            else {
                cell.classList.add("range-middle");
            }
        });        
    });
}

function clearRangeClasses() {
    let cellsToClear = calenderTable.querySelectorAll("td.range-single, td.range-start, td.range-end, td.range-middle")
    cellsToClear.forEach(cell=> {
        cell.classList.remove("range-single", "range-start", "range-end", "range-middle")
    });
}


const prevMonthButton = document.getElementById("calendarPrevMonth");
const nextMonthButton = document.getElementById("calendarNextMonth");

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar()