// data.js

// Sample candidate data
let candidates = [
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

// Function to populate the candidate data table
function populateCandidateTable() {
    let tableBody = document.getElementById("candidate-data-body");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Loop through the candidates array and populate the table
    candidates.forEach(candidate => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${candidate.EPNumber}</td>
            <td>${candidate.fullName}</td>
            <td>${candidate.age}</td>
            <td>${candidate.gender}</td>
            <td>${candidate.address}</td>
            <td>${candidate.contactNumber}</td>
        `;
    });
}

// Call the populateCandidateTable function when the page loads
window.onload = populateCandidateTable;
