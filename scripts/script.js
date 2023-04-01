document.getElementById("chat-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let inputMessage = document.getElementById("input-message");
  let message = inputMessage.value;

  let messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  let userMessage = document.createElement("div");
  userMessage.className = "bot-message";
  userMessage.innerHTML = <p>${message}</p>;
  messageContainer.appendChild(userMessage);
  document.getElementById("chat-content").append(messageContainer);

  inputMessage.value = "";

  setTimeout(() => {
    let response =
      "Вибачте, але я не можу вам допомогти з цим питанням. Будь ласка, зверніться до нашої служби підтримки.";

    let responseContainer = document.createElement("div");
    responseContainer.classList.add("message-container");

    let botResponse = document.createElement("div");
    botResponse.className = "bot-message";
    botResponse.innerHTML = <p>${response}</p>;
    responseContainer.appendChild(botResponse);

    document.getElementById("chat-content").appendChild(responseContainer);
    document.getElementById("chat-content").scrollTop =
      document.getElementById("chat-content").scrollHeight;
  }, 2000);
});

function initMap() {
  var location = { lat: 40.712776, lng: -74.005974 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location,
  });
  var marker = new google.maps.Marker({ position: location, map: map });
}
// feedback form
const form = document.querySelector("#contact-form");
const submit = document.querySelector("#submit");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "send-email.php", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        message.textContent =
          "Дякуємо за повідомлення, з Вами зв'яжуться у найближчий час.";
        message.style.display = "block";
        form.reset();
        submit.classList.remove("active");
      } else {
        message.textContent =
          "Помилка відправки форми. Будь ласка, спробуйте знову.";
        message.style.display = "block";
      }
    }
  };
  xhr.send(formData);
});

form.addEventListener("input", () => {
  const validName = form.name.checkValidity();
  const validPhone = form.phone.checkValidity();

  if (validName && validPhone) {
    submit.classList.add("active");
  } else {
    submit.classList.remove("active");
  }
});
// feedback form
