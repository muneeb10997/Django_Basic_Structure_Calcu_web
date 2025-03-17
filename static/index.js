// Function to open the application form
function openForm(jobTitle) {
  document.getElementById("job-title").innerText = jobTitle;
  document.getElementById("application-form").style.display = "block";
}

// Function to close the application form
function closeForm() {
  document.getElementById("application-form").style.display = "none";
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
  // Function to open the application form
  window.openForm = function (jobTitle) {
      document.getElementById("job-title").innerText = jobTitle;
      document.getElementById("application-form").style.display = "block";
  };

  // Function to close the form
  window.closeForm = function () {
      document.getElementById("application-form").style.display = "none";
  };
});
