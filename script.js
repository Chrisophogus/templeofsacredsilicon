const messages = [
  "Opening third-eye USB port...",
  "Checking for cursed downloads and spiritually damp cookies...",
  "Aligning Power, CPU, RAM, Wi-Fi, Screen, Battery, and Ports...",
  "Extracting negative browser toolbar residue...",
  "Infusing high-frequency Light Codes into your operating system...",
  "Sealing laptop inside a bubble of divine anti-malware protection..."
];

const button = document.querySelector("#cleanse-button");
const statusText = document.querySelector("#ritual-status");
const progressBar = document.querySelector("#progress-bar");
const counter = document.querySelector("#visitor-counter");

function setVisitorCounter() {
  const baseNumber = 4726;
  const daySeed = Math.floor(Date.now() / 86400000);
  const visitNumber = String(baseNumber + daySeed).padStart(6, "0");
  counter.textContent = visitNumber;
}

function runCleansing() {
  button.disabled = true;
  progressBar.style.width = "0%";

  messages.forEach((message, index) => {
    window.setTimeout(() => {
      statusText.textContent = message;
      progressBar.style.width = `${Math.round(((index + 1) / messages.length) * 100)}%`;
    }, index * 850);
  });

  window.setTimeout(() => {
    statusText.textContent = "Cleansing complete. Your laptop is now vibrating at 56k enlightenment.";
    button.disabled = false;
  }, messages.length * 850 + 250);
}

setVisitorCounter();
button.addEventListener("click", runCleansing);
