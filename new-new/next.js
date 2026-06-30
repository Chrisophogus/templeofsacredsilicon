const commandModal = document.querySelector(".command-modal");
const commandOpenButtons = document.querySelectorAll("[data-command-open]");
const commandCloseButtons = document.querySelectorAll("[data-command-close]");
const pricingDrawer = document.querySelector(".pricing-drawer");
const pricingOpen = document.querySelector("[data-pricing-open]");
const pricingClose = document.querySelector("[data-pricing-close]");
const onboardingButtons = document.querySelectorAll("[data-onboarding-next]");
const skipOnboarding = document.querySelector("[data-skip-onboarding]");
const onboardingQuestion = document.querySelector("#onboarding-question");
const aiSummary = document.querySelector("#ai-summary");
const aiRefresh = document.querySelector("[data-ai-refresh]");
const privacySave = document.querySelector("[data-save-privacy]");
const toast = document.querySelector(".post-toast");
const metrics = {
  arr: document.querySelector("[data-metric='arr']"),
  demons: document.querySelector("[data-metric='demons']"),
  soul: document.querySelector("[data-metric='soul']"),
  pipeline: document.querySelector("[data-metric='pipeline']")
};

const questions = [
  "What is your laptop's current relationship to abundance?",
  "Which stakeholder owns your device's shadow roadmap?",
  "How aggressively should we operationalise its healing journey?",
  "Would you describe your procurement aura as blocked, leaky, or enterprise-ready?",
  "Before we continue, what is your laptop's current relationship to abundance?"
];

const summaries = [
  "Your laptop is displaying strong indicators of premium cleanse readiness, with minor friction around soul-market fit.",
  "I have detected a whitespace opportunity between your Downloads folder and your executive narrative.",
  "The system recommends a crawl-walk-levitate roadmap with immediate investment in cross-functional aura governance.",
  "Your spiritual stack is under-monetised. Consider unlocking a bespoke transformation pod before the next quarter."
];

let questionIndex = 0;
let metricTick = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function openCommand() {
  commandModal.classList.add("is-visible");
  commandModal.setAttribute("aria-hidden", "false");
}

function closeCommand() {
  commandModal.classList.remove("is-visible");
  commandModal.setAttribute("aria-hidden", "true");
  showToast("Command accepted. Outcome postponed.");
}

commandOpenButtons.forEach((button) => {
  button.addEventListener("click", openCommand);
});

commandCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCommand);
});

pricingOpen.addEventListener("click", () => {
  pricingDrawer.classList.add("is-open");
  pricingDrawer.setAttribute("aria-hidden", "false");
});

pricingClose.addEventListener("click", () => {
  pricingDrawer.classList.remove("is-open");
  pricingDrawer.setAttribute("aria-hidden", "true");
});

onboardingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    questionIndex = (questionIndex + 1) % questions.length;
    onboardingQuestion.textContent = questions[questionIndex];
    showToast("Great. We have personalised the next question.");
  });
});

skipOnboarding.addEventListener("click", () => {
  questionIndex = 1;
  onboardingQuestion.textContent = questions[questionIndex];
  document.querySelector("#onboarding").scrollIntoView({ behavior: "smooth" });
  showToast("Skipping onboarding requires a shorter onboarding.");
});

aiRefresh.addEventListener("click", () => {
  aiSummary.textContent = summaries[Math.floor(Math.random() * summaries.length)];
  showToast("Regenerated. Confidence increased, meaning unchanged.");
});

privacySave.addEventListener("click", () => {
  showToast("Preferences saved locally in your sense of agency.");
});

window.setInterval(() => {
  metricTick += 1;
  metrics.arr.textContent = `£${404 + metricTick}k`;
  metrics.demons.textContent = String(13 + (metricTick % 9));
  metrics.soul.textContent = `${88 + (metricTick % 12)}%`;
  metrics.pipeline.textContent = `${(7.1 + (metricTick % 6) / 10).toFixed(1)}x`;
}, 1800);

window.setTimeout(openCommand, 5200);
