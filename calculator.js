


(function runCalculator() {
    // make a table with column headings
    function openResultsTable() {
        document.write("<table class='calc-table'>");
        document.write("<caption>Calculation Log</caption>");
        document.write("<thead><tr>");
        document.write("<th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th>");
        document.write("</tr></thead><tbody>");
    }
// close the table
    function closeResultsTable() {
        document.write("</tbody></table>");
    }
// write one row in the table
    function writeRow(xDisp, opDisp, yDisp, resultDisp) {
        document.write("<tr>");
        document.write("<td>" + xDisp + "</td>");
        document.write("<td>" + opDisp + "</td>");
        document.write("<td>" + yDisp + "</td>");
        document.write("<td>" + resultDisp + "</td>");
        document.write("</tr>");
    }

    // Start first table
    openResultsTable();

    const validResults = []; // store correct results here

    while (true) {
        let x = prompt("Enter first number (Cancel to finish):");
        if (x === null) break;// exit loop if cancel

        let y = prompt("Enter second number (Cancel to finish):");
        if (y === null) break;

        let op = prompt("Enter operator (+, -, *, /, %). Cancel to finish:");
        if (op === null) break;

        let result;
        let xNum = parseFloat(x);
        let yNum = parseFloat(y);

        if (isNaN(xNum) || isNaN(yNum)) {
            result = "Error: Non-numeric input";
        } else {
            //operations
            switch (op) {
                case "+": result = xNum + yNum; break;
                case "-": result = xNum - yNum; break;
                case "*": result = xNum * yNum; break;
                case "/": result = yNum !== 0 ? (xNum / yNum) : "Error: Divide by zero"; break;
                case "%": result = yNum !== 0 ? (xNum % yNum) : "Error: Mod by zero"; break;
                default: result = "Error: Invalid operator";
            }
        }
        // save only correct results
        if (typeof result === "number" && Number.isFinite(result)) {
            validResults.push(result);
        }
// show row in table
        writeRow(x, op, y, (typeof result === "number" ? result : result));
    }

    closeResultsTable();

    // Summary
    document.write("<h2>Summary</h2>");
    if (validResults.length === 0) {
        document.write("<p class='muted'>No valid results entered.</p>");
        return;
    }
// math for summary
    const total = validResults.reduce((a, b) => a + b, 0);
    const avg = total / validResults.length;
    const min = Math.min(...validResults);
    const max = Math.max(...validResults);

    // summary table
    document.write("<table class='calc-table summary'>");
    document.write("<caption>Valid Results Summary</caption>");
    document.write("<thead><tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr></thead>");
    document.write("<tbody>");
    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + avg + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    document.write("</tbody></table>");
})();
