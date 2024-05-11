// Sample job posts data (replace with your own backend data)
let jobPosts = [
    { id: 1, title: "Software Developer", department: "IT" },
    { id: 2, title: "Marketing Manager", department: "Marketing" },
    { id: 3, title: "Human Resources Specialist", department: "HR" }
  ];
  
  // Function to display job posts
  function displayJobPosts() {
    const jobPostsTable = document.getElementById("job-posts-body");
    jobPostsTable.innerHTML = "";
    jobPosts.forEach(post => {
      const row = `<tr>
                    <td>${post.title}</td>
                    <td>${post.department}</td>
                    <td>
                    <button onclick="editJobPost(${post.id})">Edit</button>
                    <button onclick="deleteJobPost(${post.id})">Delete</button>
                    </td>
                  </tr>`;
      jobPostsTable.innerHTML += row;
    });
  }
  
  // Function to add a new job post
  function addJobPost() {
    const jobTitle = document.getElementById("job-title").value;
    const jobDepartment = document.getElementById("job-department").value;
    const jobId = jobPosts.length + 1; // Generate new ID (replace with your own logic)
  
    jobPosts.push({ id: jobId, title: jobTitle, department: jobDepartment });
    displayJobPosts();
  }
  
  // Function to clear input fields
  function clearFields() {
    document.getElementById("job-title").value = "";
    document.getElementById("job-department").value = "";
  }
  
  // Function to delete a job post
  function deleteJobPost(id) {
    jobPosts = jobPosts.filter(post => post.id !== id);
    displayJobPosts();
  }

  // Function to edit a job post
  function editJobPost(id) {
  const postToEdit = jobPosts.find(post => post.id === id);
  if (postToEdit) {
      // Populate input fields with existing data
      document.getElementById("job-title").value = postToEdit.title;
      document.getElementById("job-department").value = postToEdit.department;

      // Change the Add button to Save button
      const addButton = document.getElementById("add-job-button");
      addButton.innerText = "Save";
      addButton.onclick = function() {
          saveEditedJobPost(id);
      };
    }
  }

  // Function to edit a job post
  function editJobPost(id) {
  const index = jobPosts.findIndex(post => post.id === id);
    if (index !== -1) {
      const newTitle = prompt("Enter new title:");
      const newDepartment = prompt("Enter new department:");
      if (newTitle !== null && newDepartment !== null) {
          jobPosts[index] = { ...jobPosts[index], title: newTitle, department: newDepartment };
          displayJobPosts();
      }
    }
  }
  // Display initial job posts
  displayJobPosts();
  