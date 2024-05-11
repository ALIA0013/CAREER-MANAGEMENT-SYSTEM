// Array to store SPM examination data
let spmExamData = [
    {
        id: "EP001",
        name: "Aimuni Aisyah",
        institute: "SMV",
        stream: "Science with Technical Subjects Stream",
        gradeA: 5,
        gradeB: 3,
        gradeC: 2,
        gradeD: 1,
        subMalay: "B",
        subHistory: "A"
    },
    {
        id: "EP002",
        name: "Asna Syamimi",
        institute: "SBP",
        stream: "Pure Science Stream",
        gradeA: 3,
        gradeB: 4,
        gradeC: 2,
        gradeD: 2,
        subMalay: "A",
        subHistory: "B"
    },
    {
        id: "EP003",
        name: "Alia Shafika",
        institute: "MRSM",
        stream: "Science with Additional Mathematics Stream",
        gradeA: 5,
        gradeB: 2,
        gradeC: 3,
        gradeD: 0,
        subMalay: "A",
        subHistory: "A"
    }
];

// Function to add SPM examination data
function addExamData() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const institute = document.getElementById("institute").value;
    const stream = document.getElementById("stream").value;
    const gradeA = document.getElementById("gradeA").value;
    const gradeB = document.getElementById("gradeB").value;
    const gradeC = document.getElementById("gradeC").value;
    const gradeD = document.getElementById("gradeD").value;
    const subMalay = document.getElementById("subMalay").value;
    const subHistory = document.getElementById("subHistory").value;

    // Add the data to the array
    spmExamData.push({ id, name, institute, stream, gradeA, gradeB, gradeC, gradeD, subMalay, subHistory });

    // Display the data in the table
    displaySpmExamData();
}

// Function to display SPM examination data
function displaySpmExamData() {
    const spmExamDataTable = document.getElementById("exam-data-body");
    spmExamDataTable.innerHTML = ""; // Clear existing data

    spmExamData.forEach(data => {
        const row = `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.institute}</td>
            <td>${data.stream}</td>
            <td>${data.gradeA}</td>
            <td>${data.gradeB}</td>
            <td>${data.gradeC}</td>
            <td>${data.gradeD}</td>
            <td>${data.subMalay}</td>
            <td>${data.subHistory}</td>
            <td>
                <button onclick="editSpmExamData('${data.name}')">Edit</button>
                <button onclick="deleteSpmExamData('${data.name}')">Delete</button>
            </td>
        </tr>`;
        spmExamDataTable.innerHTML += row;
    });
}

// Function to delete SPM examination data
function deleteSpmExamData(name) {
    // Find index of data with matching name
    const index = spmExamData.findIndex(data => data.name === name);
    if (index !== -1) {
        // Remove data from array
        spmExamData.splice(index, 1);
        // Update display
        displaySpmExamData();
    }
}

// Function to edit SPM examination data
function editSpmExamData(name) {
    // Find the index of the data with the matching name
    const index = spmExamData.findIndex(data => data.name === name);
    if (index !== -1) {
        // Prompt the user to edit each field individually
        let newData = spmExamData[index];
        newData.gradeA = prompt("Enter updated Grade A's:", newData.gradeA);
        newData.gradeB = prompt("Enter updated Grade B's:", newData.gradeB);
        newData.gradeC = prompt("Enter updated Grade C's:", newData.gradeC);
        newData.gradeD = prompt("Enter updated Grade D's:", newData.gradeD);
        newData.subMalay = prompt("Enter updated Malay Subject Grade:", newData.subMalay);
        newData.subHistory = prompt("Enter updated History Subject Grade:", newData.subHistory);

        // Update the data
        spmExamData[index] = newData;

        // Update display
        displaySpmExamData();
    }
}

// Function to clear form fields
function clearFields() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("institute").value = "";
    document.getElementById("stream").value = "";
    document.getElementById("gradeA").value = "";
    document.getElementById("gradeB").value = "";
    document.getElementById("gradeC").value = "";
    document.getElementById("gradeD").value = "";
    document.getElementById("subMalay").value = "";
    document.getElementById("subHistory").value = "";
}

// Display initial SPM examination data
displaySpmExamData();
