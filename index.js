// Joy Patel, COMP 4610 201

function generateTable() {

    let minCol = parseInt(document.getElementById("minCol").value);
    let maxCol = parseInt(document.getElementById("maxCol").value);
    let minRow = parseInt(document.getElementById("minRow").value);
    let maxRow = parseInt(document.getElementById("maxRow").value);

    let rowSize = maxRow - minRow + 1;
    let colSize = maxCol - minCol + 1;

    let table = "<table>";
    table += "<tr><th></th>";

    // generate table column headers
    for (let i = 0; i < colSize; i++) {
        table += "<th>" + (minCol + i) + "</th>";
    }
    table += "</tr>";

    // generate table rows
    for (let i = 0; i < rowSize; i++) {
        let rowNum = minRow + i;
        table += "<tr><td>" + rowNum + "</td>";
        for (let j = 0; j < colSize; j++) {
            let colNum = minCol + j;
            table += "<td>" + (rowNum * colNum)  + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
}

function error(text) {
    document.getElementById("table").innerHTML = `<p>${text}</p>`;
}

