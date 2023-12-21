// PROMPT WELCOME TEXT
document.addEventListener("DOMContentLoaded", function () {
  let userName = prompt("Please enter your name");
  let welcomeText = document.getElementById("welcome-text");

  if (userName == null || userName == "") {
    welcomeText.textContent = "Welcome to SMA N 4 Surakarta";
  } else {
    welcomeText.textContent = `Hi ${userName}, welcome to SMA N 4 Surakarta`;
  }
});

// TOGGLE NAVBAR MENU ON MOBILE
function toggleMenu() {
  document.querySelector(".nav-list").classList.toggle("responsive");
}

// CHECK FORM VALIDATION AND SET SENDER UI
function validateForm() {
  const messageForm = document.forms["message-form"];

  const fullname = messageForm["fullname"].value;
  const birthdate = messageForm["birthdate"].value;
  const gender = messageForm["gender"].value;
  const message = messageForm["message"].value;

  if (!messageForm.checkValidity()) {
    alert("Forms must be filled out");
    return false;
  }

  setSenderUI(fullname, birthdate, gender, message);

  return false;
}

// SET SENDER UI (MESSAGE DISPLAY)
function setSenderUI(fullname, birthdate, gender, message) {
  const date = new Date();

  // format date to dd MMMM YYYY HH:MM (ex: 01 January 2021 12:00)
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const [year, month, day] = birthdate.split("-");
  const formattedBirthdate = `${day}/${month}/${year}`;

  document.getElementById("sender-date").textContent = formattedDate;
  document.getElementById("sender-name").textContent = fullname;
  document.getElementById("sender-birthdate").textContent = formattedBirthdate;
  document.getElementById("sender-gender").textContent = gender;
  document.getElementById("sender-message").textContent = message;
}

// GET CURRENT YEAR FOR FOOTER
const date = new Date();
const year = date.getFullYear();
document.getElementById("current-year").textContent = year;
