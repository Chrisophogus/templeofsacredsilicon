const messages = [
  "Opening third-eye USB port...",
  "Checking for cursed downloads and spiritually damp cookies...",
  "Aligning Power, CPU, RAM, Wi-Fi, Screen, Battery, and Ports...",
  "Extracting negative browser toolbar residue...",
  "Infusing high-frequency Light Codes into your operating system...",
  "Sealing laptop inside a bubble of divine anti-malware protection..."
];

const button = document.querySelector("#cleanse-button");
const loadingScreen = document.querySelector(".loading-screen");
const statusText = document.querySelector("#ritual-status");
const progressBar = document.querySelector("#progress-bar");
const counter = document.querySelector("#visitor-counter");
const certificate = document.querySelector("#certificate");
const certificateDate = document.querySelector("#certificate-date");
const certificateVisitor = document.querySelector("#certificate-visitor");
const printCertificate = document.querySelector("#print-certificate");
const burnButton = document.querySelector("#burn-button");
const burnLog = document.querySelector("#burn-log");
const burnPanel = document.querySelector(".burn-in");
const cpuReading = document.querySelector("#cpu-reading");
const ramReading = document.querySelector("#ram-reading");
const fanReading = document.querySelector("#fan-reading");
const loopEscape = document.querySelector("#loop-escape");
const loopNotice = document.querySelector(".loop-notice");
const favicon = document.querySelector("#favicon");
const infernalModal = document.querySelector(".infernal-modal");
const infernalModalClose = document.querySelector("#infernal-modal-close");
const guestbookModal = document.querySelector(".guestbook-modal");
const guestbookLink = document.querySelector("#guestbook-link");
const guestbookClose = document.querySelector("#guestbook-close");
const curseToast = document.querySelector(".curse-toast");
const corruptedTextElements = document.querySelectorAll("[data-infernal-text]");
const cleansyPop = document.querySelector(".cleansy-pop");
const cleansyCaption = document.querySelector("#cleansy-caption");
const chaosOfferings = document.querySelectorAll("[data-chaos]");
const macEdenWarning = document.querySelector("#mac-eden-warning");
const karmicForm = document.querySelector(".karmic-form");
const redactionStatus = document.querySelector("#redaction-status");

const burnMessages = [
  "Allocating imaginary incense cache...",
  "Overclocking the crown chakra bus...",
  "Spinning fan chants to 33,600 baud...",
  "Measuring morally suspicious heat signatures...",
  "Pouring ceremonial glitter into virtual RAM...",
  "Opening 47 sacred progress bars in the astral plane...",
  "Cooling laptop with ethically sourced moonlight...",
  "Re-indexing battery karma...",
  "Negotiating with the fan's ancestral spirits...",
  "Defragmenting shame from the downloads folder...",
  "Polishing the HDMI aura...",
  "Compressing regret into a blessed temporary file..."
];

const infernalMessages = [
  "Opening basement USB port...",
  "Checking for suspiciously warm downloads...",
  "Misaligning Power, CPU, RAM, Wi-Fi, Screen, Battery, and Ports...",
  "Injecting negative browser toolbar residue...",
  "Infusing low-frequency Heat Codes into your operating system...",
  "Removing protective bubble. This seems fine."
];

const burnInTicks = 36;
const burnInDelay = 340;
const infernalFavicon = "assets/favicon-infernal.png";

let audioContext;
let scrollClickCount = 0;
let lastScrollTime = 0;
let loopMode = false;
let infernalMode = false;
let lastSparkTime = 0;
let visitorNumber = "000000";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let konamiIndex = 0;

function setVisitorCounter() {
  const baseNumber = 4726;
  const daySeed = Math.floor(Date.now() / 86400000);
  visitorNumber = String(baseNumber + daySeed).padStart(6, "0");
  counter.textContent = visitorNumber;
}

function hideLoadingScreen() {
  window.setTimeout(() => {
    loadingScreen.classList.add("is-hidden");
  }, 700);
}

function revealCertificate() {
  certificate.hidden = false;
  certificateDate.textContent = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  certificateVisitor.textContent = counter.textContent;
}

function runCleansing() {
  const activeMessages = infernalMode ? infernalMessages : messages;

  button.disabled = true;
  progressBar.style.width = "0%";

  activeMessages.forEach((message, index) => {
    window.setTimeout(() => {
      statusText.textContent = message;
      progressBar.style.width = `${Math.round(((index + 1) / activeMessages.length) * 100)}%`;
    }, index * 850);
  });

  window.setTimeout(() => {
    statusText.textContent = infernalMode
      ? "Uncleaning complete. Your laptop is now humming in questionable warmth."
      : "Cleansing complete. Your laptop is now vibrating at 56k enlightenment.";
    revealCertificate();
    button.disabled = false;
  }, activeMessages.length * 850 + 250);
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

function playInfernalSting() {
  [0, 0.09, 0.18, 0.34].forEach((delay, index) => {
    window.setTimeout(() => playBlessedBleep(index + 9), delay * 1000);
  });
}

function playCleansySting() {
  [0, 0.08, 0.16].forEach((delay, index) => {
    window.setTimeout(() => playBlessedBleep(index + (infernalMode ? 12 : 3)), delay * 1000);
  });
}

function corruptCopy() {
  corruptedTextElements.forEach((element) => {
    if (!element.dataset.originalText) {
      element.dataset.originalText = element.textContent;
    }

    element.textContent = element.dataset.infernalText;
  });
}

function showInfernalModal() {
  infernalModal.classList.add("is-visible");
  infernalModal.setAttribute("aria-hidden", "false");
}

function hideInfernalModal() {
  infernalModal.classList.remove("is-visible");
  infernalModal.setAttribute("aria-hidden", "true");
}

function showGuestbook() {
  guestbookModal.classList.add("is-visible");
  guestbookModal.setAttribute("aria-hidden", "false");
}

function hideGuestbook() {
  guestbookModal.classList.remove("is-visible");
  guestbookModal.setAttribute("aria-hidden", "true");
}

function showCurseToast() {
  curseToast.classList.remove("is-visible");
  curseToast.setAttribute("aria-hidden", "false");
  void curseToast.offsetWidth;
  curseToast.classList.add("is-visible");

  window.setTimeout(() => {
    curseToast.classList.remove("is-visible");
    curseToast.setAttribute("aria-hidden", "true");
  }, 1500);
}

function showCleansyPop() {
  cleansyCaption.textContent = infernalMode ? "ROASTY!" : "CLEANSY!";
  cleansyPop.classList.remove("is-visible");
  cleansyPop.setAttribute("aria-hidden", "false");
  void cleansyPop.offsetWidth;
  cleansyPop.classList.add("is-visible");
  playCleansySting();

  window.setTimeout(() => {
    cleansyPop.classList.remove("is-visible");
    cleansyPop.setAttribute("aria-hidden", "true");
  }, 2100);
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
    if (tick % 2 === 0) {
      playBlessedBleep(tick);
    }

    tick += 1;

    if (tick >= burnInTicks) {
      window.clearInterval(burnInterval);
      burnPanel.classList.remove("is-burning");
      cpuReading.textContent = "0%";
      ramReading.textContent = "blessed";
      fanReading.textContent = "purring";
      burnLog.textContent = `${logLines.join("\n")}\n> Burn-in complete. No actual resources were harmed.`;
      burnButton.disabled = false;
      showCleansyPop();
    }
  }, burnInDelay);
}

function enableInfernalMode() {
  infernalMode = true;
  document.body.classList.add("infernal-mode");
  favicon.setAttribute("href", infernalFavicon);
  counter.textContent = "00666";
  corruptCopy();
  burnLog.textContent = "INFERNAL SILICON MODE UNSEALED\n> Please cleanse responsibly.";
  showInfernalModal();
  playInfernalSting();
}

function activateBasementHash() {
  if (window.location.hash === "#basement") {
    enableInfernalMode();
  }
}

function createCursorSpark(event) {
  if (!infernalMode || Date.now() - lastSparkTime < 45) {
    return;
  }

  lastSparkTime = Date.now();

  const spark = document.createElement("span");
  spark.className = "cursor-spark";
  spark.style.left = `${event.clientX}px`;
  spark.style.top = `${event.clientY}px`;
  document.body.append(spark);
  window.setTimeout(() => spark.remove(), 850);
}

function enableLoopMode() {
  loopMode = true;
  document.body.classList.add("loop-mode");
  loopNotice.setAttribute("aria-hidden", "false");
}

function disableLoopMode() {
  loopMode = false;
  scrollClickCount = 0;
  document.body.classList.remove("loop-mode");
  loopNotice.setAttribute("aria-hidden", "true");
}

function handleKonami(event) {
  const expectedKey = konamiCode[konamiIndex];
  const actualKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;

  if (actualKey === expectedKey) {
    konamiIndex += 1;
  } else {
    konamiIndex = actualKey === konamiCode[0] ? 1 : 0;
  }

  if (konamiIndex === konamiCode.length) {
    konamiIndex = 0;
    enableInfernalMode();
  }
}

function handleScroll() {
  lastScrollTime = Date.now();

  if (!loopMode) {
    return;
  }

  const bottomDistance = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

  if (bottomDistance < 80) {
    window.scrollTo({ top: Math.round(window.innerHeight * 0.42), behavior: "auto" });
  }
}

function handleDocumentClick() {
  if (Date.now() - lastScrollTime > 900 || loopMode) {
    return;
  }

  scrollClickCount += 1;

  if (scrollClickCount >= 5) {
    enableLoopMode();
  }
}

function detectAppleMac() {
  if (!macEdenWarning) {
    return;
  }

  const userAgentPlatform = navigator.userAgentData ? navigator.userAgentData.platform : "";
  const platform = userAgentPlatform || navigator.platform || "";
  const userAgent = navigator.userAgent || "";
  const isAppleMac = /mac/i.test(platform) || /Macintosh|Mac OS X/.test(userAgent);

  if (isAppleMac) {
    document.body.classList.add("apple-eden-mode");
    macEdenWarning.hidden = false;
  }
}

function redactKarmicPreScreening() {
  const fields = karmicForm.querySelectorAll("[data-redact-field]");
  const redactedTargets = new Set();

  fields.forEach((field) => {
    const targetName = field.dataset.redactField;
    const hasValue = field.type === "checkbox" ? field.checked : field.value.trim() !== "";

    if (!targetName || !hasValue) {
      return;
    }

    const hiddenField = karmicForm.elements[targetName];

    if (hiddenField) {
      hiddenField.value = "REDACTED BY THE TEMPLE BEFORE TRANSMISSION";
      redactedTargets.add(targetName);
    }

    if (field.type !== "checkbox") {
      field.value = "";
      field.placeholder = "REDACTED BEFORE EMAIL";
    }
  });

  if (redactionStatus) {
    const redactionCount = redactedTargets.size;
    redactionStatus.textContent = redactionCount > 0
      ? `${redactionCount} cursed pre-screening answer${redactionCount === 1 ? "" : "s"} spiritually shredded before email.`
      : "No cursed pre-screening answers needed shredding.";
  }
}

setVisitorCounter();
hideLoadingScreen();
activateBasementHash();
detectAppleMac();
button.addEventListener("click", runCleansing);
printCertificate.addEventListener("click", () => window.print());
burnButton.addEventListener("click", runBurnIn);
loopEscape.addEventListener("click", disableLoopMode);
infernalModalClose.addEventListener("click", hideInfernalModal);
guestbookLink.addEventListener("click", (event) => {
  event.preventDefault();
  showGuestbook();
});
guestbookClose.addEventListener("click", hideGuestbook);
chaosOfferings.forEach((offering) => {
  const description = offering.querySelector("p:last-child");
  const originalText = description.textContent;

  offering.addEventListener("mouseenter", () => {
    description.textContent = offering.dataset.chaos;
  });
  offering.addEventListener("mouseleave", () => {
    description.textContent = originalText;
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    disableLoopMode();
    hideInfernalModal();
    hideGuestbook();
    return;
  }

  handleKonami(event);
});
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("hashchange", activateBasementHash);
window.addEventListener("pointermove", createCursorSpark, { passive: true });
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  showCurseToast();
});
document.addEventListener("click", handleDocumentClick);
if (karmicForm) {
  karmicForm.addEventListener("submit", redactKarmicPreScreening);
}
