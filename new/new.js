const modal = document.querySelector(".modern-modal");
const toast = document.querySelector(".modern-toast");
const cookieBanner = document.querySelector(".modern-cookie");
const chat = document.querySelector(".modern-chat");
const popupButtons = document.querySelectorAll("[data-pop-open]");
const popupCloseButtons = document.querySelectorAll("[data-pop-close]");
const toastButtons = document.querySelectorAll("[data-toast]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const cookieConfigure = document.querySelector("[data-cookie-configure]");
const chatClose = document.querySelector("[data-chat-close]");

let modalDismissed = false;
let chatDismissed = false;

function showModal() {
  modal.classList.add("is-visible");
  modalDismissed = false;
}

function hideModal() {
  modal.classList.remove("is-visible");
  modalDismissed = true;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

popupButtons.forEach((button) => {
  button.addEventListener("click", showModal);
});

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", hideModal);
});

toastButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.toast);
  });
});

cookieAccept.addEventListener("click", () => {
  cookieBanner.classList.add("is-gone");
  showToast("Thank you. 847 partners have felt your warmth.");
});

cookieConfigure.addEventListener("click", () => {
  cookieBanner.classList.add("is-worse");
  showToast("Preference centre loading. Please prepare a packed lunch.");
});

chatClose.addEventListener("click", () => {
  chat.classList.remove("is-annoying");
  chatDismissed = true;

  window.setTimeout(() => {
    if (chatDismissed) {
      chat.classList.add("is-annoying");
      showToast("AuraBot missed you.");
    }
  }, 5000);
});

window.setTimeout(() => {
  if (modalDismissed) {
    showModal();
  }
}, 8500);
