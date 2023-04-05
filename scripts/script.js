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
const MODAL_ACTIVE_CLASS_NAME = "modal-active";

const contactBtn = document.getElementById("contactBtn");
// const formContainer = document.getElementById("formContainer");
const successMessage = document.getElementById("successMessage");
const contactForm = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

// feedback form BANDEROGUS !!!!
// const MODAL_ACTIVE_CLASS_NAME = "modal-active";

// openFormModalBtn.addEventListener("click", () => {
//   formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
// });

contactBtn.addEventListener("click", () => {
  formContainer.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  formContainer.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
  successMessage.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
  successMessage.classList.add(MODAL_ACTIVE_CLASS_NAME);
};
//
// closeBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     closeFormModal();
//     closeSuccessModal();
//   });
// });
//clear form fields
function clearFormFields() {
  const modalFiends = contactForm.querySelectorAll("input");

  modalFiends.forEach((field) => {
    field.value = "";
  });
}
//send data to netlify form
form.addEventListener("submitBtn", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // showGooseAnim();

      setTimeout(() => {
        closeFormModal();
        setTimeout(openSuccessModal, 700);
        setTimeout(closeSuccessModal, 4000);
        clearFormFields();
      }, 4000);
    })
    .catch((error) => console.log("Sending form failed"));
});
