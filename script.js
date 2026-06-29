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
const burnButton = document.querySelector("#burn-button");
const burnLog = document.querySelector("#burn-log");
const burnPanel = document.querySelector(".burn-in");
const cpuReading = document.querySelector("#cpu-reading");
const ramReading = document.querySelector("#ram-reading");
const fanReading = document.querySelector("#fan-reading");

const burnMessages = [
  "Allocating imaginary incense cache...",
  "Overclocking the crown chakra bus...",
  "Spinning fan chants to 33,600 baud...",
  "Measuring morally suspicious heat signatures...",
  "Pouring ceremonial glitter into virtual RAM...",
  "Opening 47 sacred progress bars in the astral plane...",
  "Cooling laptop with ethically sourced moonlight..."
];

let audioContext;

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

function playBlessedBleep(tick) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  audioContext = audioContext || new AudioContext();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  const frequencies = [330, 440, 523, 659, 784, 988];

  oscillator.type = tick % 3 === 0 ? "square" : "sine";
  oscillator.frequency.setValueAtTime(frequencies[tick % frequencies.length], now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.035, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.12);
}

function runBurnIn() {
  let tick = 0;
  let logLines = ["HIGH INTENSITY CHAKRA BURN-IN STARTED"];

  burnButton.disabled = true;
  burnPanel.classList.add("is-burning");

  const burnInterval = window.setInterval(() => {
    const message = burnMessages[tick % burnMessages.length];
    const fakeCpu = Math.min(999, 84 + tick * 37);
    const fakeRam = Math.min(65535, 512 + tick * 4096);
    const fanStates = ["humming", "chanting", "wailing", "levitating", "communing"];

    cpuReading.textContent = `${fakeCpu}%`;
    ramReading.textContent = `${fakeRam.toLocaleString("en-GB")} MB`;
    fanReading.textContent = fanStates[tick % fanStates.length];
    logLines = [...logLines.slice(-4), `> ${message}`];
    burnLog.textContent = logLines.join("\n");
    playBlessedBleep(tick);

    tick += 1;

    if (tick > 14) {
      window.clearInterval(burnInterval);
      burnPanel.classList.remove("is-burning");
      cpuReading.textContent = "0%";
      ramReading.textContent = "blessed";
      fanReading.textContent = "purring";
      burnLog.textContent = `${logLines.join("\n")}\n> Burn-in complete. No actual resources were harmed.`;
      burnButton.disabled = false;
    }
  }, 240);
}

setVisitorCounter();
button.addEventListener("click", runCleansing);
burnButton.addEventListener("click", runBurnIn);
