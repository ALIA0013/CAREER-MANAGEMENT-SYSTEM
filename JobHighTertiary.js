// Array to store higher tertiary examination data
let higherTertiaryData = [
    {
        id: "EP001",
        name: "Aimuni Aisyah",
        institute: "Universiti Kebangsaan Malaysia (UKM)",
        level: "Bachelor's Degrees",
        degreeType: "Accounting",
        degreeName: "Bachelor of Accounting (BAcc)",
        cgpa: 3.75
    },
    {
        id: "EP002",
        name: "Asna Syamimi",
        institute: "Universiti Sains Malaysia (USM)",
        level: "Master's Degrees",
        degreeType: "Marketing",
        degreeName: "Master of Business Administration (MBA) with a concentration in Marketing",
        cgpa: 3.90
    },
    {
        id: "EP003",
        name: "Alia Shafika",
        institute: "Universiti Teknologi Mara (UiTM)",
        level: "Doctoral Degrees (PhD)",
        degreeType: "Software Engeneering",
        degreeName: "Doctor of Computer Science (D.C.S.) with a concentration in Software Engineering",
        cgpa: 3.80
    }
];

// Function to add higher tertiary examination data
function addExamData() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const institute = document.getElementById("institute").value;
    const level = document.getElementById("level").value;
    const degreeType = document.getElementById("degreeType").value;
    const degreeName = document.getElementById("degreeName").value;
    const cgpa = document.getElementById("cgpa").value;

    // Add the data to the array
    higherTertiaryData.push({ id, name, institute, level, degreeType, degreeName, cgpa });

    // Display the data in the table
    displayHigherTertiaryData();
}

// Function to display higher tertiary examination data
function displayHigherTertiaryData() {
    const higherTertiaryDataTable = document.getElementById("exam-data-body");
    higherTertiaryDataTable.innerHTML = ""; // Clear existing data

    higherTertiaryData.forEach(data => {
        const row = `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.institute}</td>
            <td>${data.level}</td>
            <td>${data.degreeType}</td>
            <td>${data.degreeName}</td>
            <td>${data.cgpa}</td>
            <td>
                <button onclick="editHigherTertiaryData('${data.level}')">Edit</button>
                <button onclick="deleteHigherTertiaryData('${data.level}')">Delete</button>
            </td>
        </tr>`;
        higherTertiaryDataTable.innerHTML += row;
    });
}

// Function to delete higher tertiary examination data
function deleteHigherTertiaryData(level) {
    // Find index of data with matching level
    const index = higherTertiaryData.findIndex(data => data.level === level);
    if (index !== -1) {
        // Remove data from array
        higherTertiaryData.splice(index, 1);
        // Update display
        displayHigherTertiaryData();
    }
}

// Function to edit higher tertiary examination data
function editHigherTertiaryData(level) {
    // Find the index of the data with the matching level
    const index = higherTertiaryData.findIndex(data => data.level === level);
    if (index !== -1) {
        // Prompt the user to edit each field individually
        let newData = higherTertiaryData[index];
        newData.level = prompt("Enter updated Level:", newData.level);
        newData.degreeType = prompt("Enter updated Degree Type:", newData.degreeType);
        newData.degreeName = prompt("Enter updated Degree Type:", newData.degreeName);
        newData.cgpa = prompt("Enter updated CGPA:", newData.cgpa);

        // Update the data
        higherTertiaryData[index] = newData;

        // Update display
        displayHigherTertiaryData();
    }
}

// Function to clear form fields
function clearFields() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("institute").value = "";
    document.getElementById("level").value = "";
    document.getElementById("degreeType").value = "";
    document.getElementById("degreeName").value = "";
    document.getElementById("cgpa").value = "";
}

// Display initial higher tertiary examination data
displayHigherTertiaryData();