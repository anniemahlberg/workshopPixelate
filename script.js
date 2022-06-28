// Your code here
const table = document.getElementsByTagName("table")[0];

function makeRow (){
    const row = document.createElement("tr");
    for (let i=0; i < 20; i++) {
        const td = document.createElement('td');
        row.appendChild(td);
    }
table.appendChild(row);
}



let addRow = document.getElementById("add-row");

addRow.addEventListener('click', makeRow);

table.addEventListener('click', colorize);

let selectedColor = "aqua";



let select = document.getElementsByTagName("select")[0]
select.addEventListener('change', changeColor);

function changeColor (event) {

    selectedColor = event.target.value
}

function colorize(event) {
    const currentTD = event.target
    if (currentTD.className.length) {
        currentTD.className = "";
    }
    else {
        currentTD.className = selectedColor;
    }
}