// document.getElementById("chat-form").addEventListener("submit", (event) => {
//   event.preventDefault();

//   let inputMessage = document.getElementById("input-message");
//   let message = inputMessage.value;

//   let messageContainer = document.createElement("div");
//   messageContainer.classList.add("message-container");

//   let userMessage = document.createElement("div");
//   userMessage.className = "bot-message";
//   userMessage.innerHTML = <p>${message}</p>;
//   messageContainer.appendChild(userMessage);
//   document.getElementById("chat-content").append(messageContainer);

//   inputMessage.value = "";

//   setTimeout(() => {
//     let response =
//       "Вибачте, але я не можу вам допомогти з цим питанням. Будь ласка, зверніться до нашої служби підтримки.";

//     let responseContainer = document.createElement("div");
//     responseContainer.classList.add("message-container");

//     let botResponse = document.createElement("div");
//     botResponse.className = "bot-message";
//     botResponse.innerHTML = <p>${response}</p>;
//     responseContainer.appendChild(botResponse);

//     document.getElementById("chat-content").appendChild(responseContainer);
//     document.getElementById("chat-content").scrollTop =
//       document.getElementById("chat-content").scrollHeight;
//   }, 2000);
// });

// function initMap() {
//   var location = { lat: 40.712776, lng: -74.005974 };
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 14,
//     center: location,
//   });
//   var marker = new google.maps.Marker({ position: location, map: map });
// }
// feedback form
const formContainer = document.getElementById("formContainer");
const contactBtn = document.getElementById("contactBtn");
const successMessage = document.getElementById("successMessage");
const contactForm = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

contactBtn.addEventListener("click", function () {
  formContainer.classList.toggle("hidden");
});

function toggleSubmitButton() {
  if (nameField.value.trim() !== "" && phoneField.value.trim() !== "") {
    submitBtn.classList.add("active");
    submitBtn.disabled = false;
  } else {
    submitBtn.classList.remove("active");
    submitBtn.disabled = true;
  }
}

nameField.addEventListener("input", toggleSubmitButton);
phoneField.addEventListener("input", toggleSubmitButton);

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formContainer.classList.add("hidden");
  successMessage.classList.remove("hidden");
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
});

// feedback form
