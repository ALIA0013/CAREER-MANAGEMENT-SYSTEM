let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});

function navigateToDashboardPage() {
    window.location.href = "DS.html";
}

function navigateToJobSeekerPage() {
    window.location.href = "JobPersonalData.html";
}

function navigateToJobPostPage() {
    window.location.href = "JobPost.html";
}

function navigateToMarksPage() {
    window.location.href = "Marks.html";
}

function navigateToCandidatePage() {
    window.location.href = "Candidate.html";
}

function navigateToReportsPage() {
    window.location.href = "Reports.html";
}

function logout() {
    alert("Logout successful!");
    window.location.href = "login.html";
}

function updateTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const datetime = new Date().toLocaleString('en-US', options);
    document.getElementById("datetime").innerText = datetime;
}

updateTime();
setInterval(updateTime, 1000); // Update time every second
