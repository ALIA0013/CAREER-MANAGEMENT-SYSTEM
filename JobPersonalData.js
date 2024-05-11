// Array to store personal data
let personalData = [
    {
        idNumber: "EP001",
        fullName: "Aimuni Aisyah",
        age: 21,
        gender: "Female",
        address: "Kemaman, Terengganu",
        contactNumber: "016-4328805"
    },
    {
        idNumber: "EP002",
        fullName: "Asna Syamimi",
        age: 22,
        gender: "Female",
        address: "Manjung, Perak",
        contactNumber: "019-4101489"
    },
    {
        idNumber: "EP003",
        fullName: "Alia Shafika",
        age: 21,
        gender: "Female",
        address: "Butterworth, Pulau Pinang",
        contactNumber: "011-72726249"
    }
];

// Function to add personal data
function addData() {
    const idNumber = document.getElementById("id-number").value;
    const fullName = document.getElementById("full-name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const contactNumber = document.getElementById("contact-number").value;

    // Add the data to the array
    personalData.push({ idNumber, fullName, age, gender, address, contactNumber });

    // Display the data in the table
    displayPersonalData();
}

// Function to display personal data
function displayPersonalData() {
    const personalDataTable = document.getElementById("personal-data-body");
    personalDataTable.innerHTML = ""; // Clear existing data

    personalData.forEach(data => {
        const row = `<tr>
            <td>${data.idNumber}</td>
            <td>${data.fullName}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
            <td>${data.address}</td>
            <td>${data.contactNumber}</td>
            <td>
                <button onclick="editPersonalData('${data.idNumber}')">Edit</button> <!-- Edit button -->
                <button onclick="deletePersonalData('${data.idNumber}')">Delete</button>
            </td>
        </tr>`;
        personalDataTable.innerHTML += row;
    });
}

// Function to delete personal data
function deletePersonalData(idNumber) {
    // Find index of data with matching ID number
    const index = personalData.findIndex(data => data.idNumber === idNumber);
    if (index !== -1) {
        // Remove data from array
        personalData.splice(index, 1);
        // Update display
        displayPersonalData();
    }
}

// Function to clear form fields
function clearFields() {
    document.getElementById("id-number").value = "";
    document.getElementById("full-name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "female"; // Reset gender to default
    document.getElementById("address").value = "";
    document.getElementById("contact-number").value = "";
}

// Function to edit personal data
function editPersonalData(idNumber) {
    // Find the index of the data with the matching ID number
    const index = personalData.findIndex(data => data.idNumber === idNumber);
    if (index !== -1) {
        // Prompt the user to edit each field individually
        let newData = personalData[index];
        newData.idNumber = prompt("Enter updated Employee Number:", newData.idNumber);
        newData.fullName = prompt("Enter updated Full Name:", newData.fullName);
        newData.age = prompt("Enter updated Age:", newData.age);
        newData.gender = prompt("Enter updated Gender:", newData.gender);
        newData.address = prompt("Enter updated Address:", newData.address);
        newData.contactNumber = prompt("Enter updated Contact Number:", newData.contactNumber);
        
        // Update the data
        personalData[index] = newData;
        
        // Update display
        displayPersonalData();
    }
}

// Display initial personal data
displayPersonalData();
