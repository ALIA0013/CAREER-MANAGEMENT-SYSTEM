// Array to store marks data
let markData = [
    {
        jobPost: "Software Developer",
        gradeA: 5,
        gradeB: 4,
        gradeC: 3,
        gradeD: 2,
        subMalay: "A",
        subHistory: "B",
        cgpa: 3.75,
        degreeType: "Software Engeneering",
        degreeCGPA: 3.9
    },
    {
        jobPost: "Marketing Manager",
        gradeA: 4,
        gradeB: 3,
        gradeC: 3,
        gradeD: 1,
        subMalay: "B",
        subHistory: "A",
        cgpa: 3.5,
        degreeType: "Marketing",
        degreeCGPA: 3.8
    },
    {
        jobPost: "Human Resources Specialist",
        gradeA: 3,
        gradeB: 2,
        gradeC: 4,
        gradeD: 1,
        subMalay: "A",
        subHistory: "A",
        cgpa: 3.9,
        degreeType: "Human Resources",
        degreeCGPA: 4.0
    }
];

// Function to add marks data
function addMarkData() {
    const jobPost = document.getElementById("jobPost").value;
    const gradeA = document.getElementById("gradeA").value;
    const gradeB = document.getElementById("gradeB").value;
    const gradeC = document.getElementById("gradeC").value;
    const gradeD = document.getElementById("gradeD").value;
    const subMalay = document.getElementById("subMalay").value;
    const subHistory = document.getElementById("subHistory").value;
    const cgpa = document.getElementById("CGPA").value;
    const degreeType = document.getElementById("degreeType").value;
    const degreeCGPA = document.getElementById("degreeCGPA").value;

    // Add the data to the array
    markData.push({ jobPost, gradeA, gradeB, gradeC, gradeD, subMalay, subHistory, cgpa, degreeType, degreeCGPA });

    // Display the data in the table
    displayMarkData();
}

// Function to display marks data
function displayMarkData() {
    const markDataTable = document.getElementById("mark-data-body");
    markDataTable.innerHTML = ""; // Clear existing data

    markData.forEach(data => {
        const row = `<tr>
            <td>${data.jobPost}</td>
            <td>${data.gradeA}</td>
            <td>${data.gradeB}</td>
            <td>${data.gradeC}</td>
            <td>${data.gradeD}</td>
            <td>${data.subMalay}</td>
            <td>${data.subHistory}</td>
            <td>${data.cgpa}</td>
            <td>${data.degreeType}</td>
            <td>${data.degreeCGPA}</td>
            <td>
                <button onclick="editMarkData('${data.jobPost}')">Edit</button>
                <button onclick="deleteMarkData('${data.jobPost}')">Delete</button>
            </td>
        </tr>`;
        markDataTable.innerHTML += row;
    });
}

// Function to delete marks data
function deleteMarkData(jobPost) {
    // Find index of data with matching job post
    const index = markData.findIndex(data => data.jobPost === jobPost);
    if (index !== -1) {
        // Remove data from array
        markData.splice(index, 1);
        // Update display
        displayMarkData();
    }
}

// Function to edit marks data
function editMarkData(jobPost) {
    // Find the index of the data with the matching job post
    const index = markData.findIndex(data => data.jobPost === jobPost);
    if (index !== -1) {
        // Prompt the user to edit each field individually
        let newData = markData[index];
        newData.gradeA = prompt("Enter updated Grade A's:", newData.gradeA);
        newData.gradeB = prompt("Enter updated Grade B's:", newData.gradeB);
        newData.gradeC = prompt("Enter updated Grade C's:", newData.gradeC);
        newData.gradeD = prompt("Enter updated Grade D's:", newData.gradeD);
        newData.subMalay = prompt("Enter updated Malay Subject Grade:", newData.subMalay);
        newData.subHistory = prompt("Enter updated History Subject Grade:", newData.subHistory);
        newData.cgpa = prompt("Enter updated Pre-Tertiary CGPA:", newData.cgpa);
        newData.degreeType = prompt("Enter updated Tertiary Type:", newData.degreeType);
        newData.degreeCGPA = prompt("Enter updated Tertiary CGPA:", newData.degreeCGPA);

        // Update the data
        markData[index] = newData;

        // Update display
        displayMarkData();
    }
}

// Function to clear form fields
function clearFields() {
    document.getElementById("jobPost").value = "";
    document.getElementById("gradeA").value = "";
    document.getElementById("gradeB").value = "";
    document.getElementById("gradeC").value = "";
    document.getElementById("gradeD").value = "";
    document.getElementById("subMalay").value = "";
    document.getElementById("subHistory").value = "";
    document.getElementById("CGPA").value = "";
    document.getElementById("degreeType").value = "";
    document.getElementById("degreeCGPA").value = "";
}

// Display initial marks data
displayMarkData();
