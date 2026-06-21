// ===== CONTACT FORM VALIDATION FEATURE =====
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successBox = document.getElementById("formSuccess");

  // A simple pattern to check if the email looks valid (something@something.something)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Listen for the form being submitted
  form.addEventListener("submit", function (event) {

    // Stop the form from actually submitting/reloading the page
    event.preventDefault();

    let isValid = true; // We assume it's valid until we find a problem

    // ----- Check Name -----
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");   // Bootstrap turns the box red
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
    }

    // ----- Check Email -----
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
    }

    // ----- Check Message (must be at least 10 characters) -----
    if (messageInput.value.trim().length < 10) {
      messageInput.classList.add("is-invalid");
      isValid = false;
    } else {
      messageInput.classList.remove("is-invalid");
    }

    // ----- If everything passed, show success and reset the form -----
    if (isValid) {
      successBox.classList.remove("d-none");  // Reveal the green success message
      form.reset();                           // Clear all the input boxes

      // Hide the success message again after 4 seconds
      setTimeout(function () {
        successBox.classList.add("d-none");
      }, 4000);
    } else {
      successBox.classList.add("d-none"); // Make sure success message stays hidden if invalid
    }

  });

});