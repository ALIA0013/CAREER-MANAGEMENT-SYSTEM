// Sample report data
let reports = [
    {
        EPNumber: "EP001",
        fullName: "Aimuni Aisyah",
        age: 21,
        gender: "Female",
        address: "Kemaman, Terengganu",
        contactNumber: "016-4328805"
    },
    {
        EPNumber: "EP002",
        fullName: "Asna Syamimi",
        age: 22,
        gender: "Female",
        address: "Manjung, Perak",
        contactNumber: "019-4101489"
    },
    {
        EPNumber: "EP003",
        fullName: "Alia Shafika",
        age: 21,
        gender: "Female",
        address: "Butterworth, Pulau Pinang",
        contactNumber: "011-72726249"
    },
];

// Function to populate the report data table
function populateReportTable() {
    let tableBody = document.getElementById("report-data-body");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Loop through the reports array and populate the table
    reports.forEach(report => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${report.EPNumber}</td>
            <td>${report.fullName}</td>
            <td>${report.age}</td>
            <td>${report.gender}</td>
            <td>${report.address}</td>
            <td>${report.contactNumber}</td>
        `;
    });
}

function printReport() {
    window.print();
}

// Call the populateReportTable function when the page loads
window.onload = populateReportTable;