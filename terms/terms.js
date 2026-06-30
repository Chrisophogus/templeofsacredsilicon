const termsContainer = document.querySelector("#terms-pages");
const termsCount = document.querySelector("#terms-count");
const totalPages = 2003;

const subjects = [
  "laptop aura",
  "browser history shadow",
  "charging cable resentment",
  "desktop corner karma",
  "trackpad intuition",
  "USB port envy",
  "battery shame",
  "download folder humidity",
  "Wi-Fi chakra drift",
  "incognito sincerity",
  "printer driver grief",
  "cursor confidence"
];

const obligations = [
  "acknowledges that cleansing is performed through vibes, implication, and legally non-specific moonlight",
  "agrees not to hold the Temple liable for feelings of sudden clarity, mild confusion, or toolbar nostalgia",
  "accepts that all progress bars are devotional artworks and may not correspond to progress",
  "waives any expectation that the ritual will improve performance, battery life, posture, or character",
  "confirms that any perceived improvement may be coincidence, placebo, cache expiry, or divine intervention",
  "undertakes to maintain a respectful distance from all connected power cables during moments of inquiry",
  "recognises that the Temple may classify hesitation as a billable energetic event",
  "consents to being addressed as Seeker, Visitor, User, Pilgrim, or whichever term fits the current invoice"
];

const remedies = [
  "a printable certificate of uncertain authority",
  "one ceremonial apology to the nearest available peripheral",
  "a non-transferable blessing with no cash value",
  "the right to refresh the page and pretend the matter has been escalated",
  "a spiritually laminated sense of closure",
  "a replacement clause of equal or greater ambiguity",
  "a cooling-off period measured in browser tabs",
  "a support response drafted entirely by incense"
];

const jurisdictions = [
  "the Court of Ancient Ethernet",
  "the High Bench of Unread Modal Dialogues",
  "the Tribunal of Muted Notifications",
  "the Parish Council of Expired SSL Certificates",
  "the Supreme Cache of Netscape Memory",
  "the Lower Chamber of Unlicensed Clip Art",
  "the Board of Reasonable Spiritual Latency",
  "the Ministry of Unclear Consent"
];

function pick(list, index, offset = 0) {
  return list[(index + offset) % list.length];
}

function buildPage(pageNumber) {
  const article = document.createElement("article");
  article.className = "terms-page";

  const heading = document.createElement("h2");
  heading.textContent = `Page ${pageNumber.toLocaleString("en-GB")} of ${totalPages.toLocaleString("en-GB")}: Clause ${String(pageNumber).padStart(4, "0")}`;

  const first = document.createElement("p");
  first.textContent = `The Seeker's ${pick(subjects, pageNumber)} ${pick(obligations, pageNumber)}.`;

  const second = document.createElement("p");
  second.textContent = `In the unlikely event of dispute, complaint, revelation, misunderstanding, or laptop sighing, the sole remedy shall be ${pick(remedies, pageNumber, 3)}.`;

  const third = document.createElement("p");
  third.textContent = `All matters arising under this clause shall be interpreted by ${pick(jurisdictions, pageNumber, 5)}, unless Mercury is retrograde, in which case interpretation shall be postponed without notice.`;

  const subclauses = document.createElement("ol");
  subclauses.type = "a";
  ["No waiver of vibes shall be implied.", "No silence shall indicate technical competence.", "No cable shall be licked for evidential purposes."].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    subclauses.append(item);
  });

  article.append(heading, first, second, third, subclauses);
  return article;
}

function generateTerms() {
  const fragment = document.createDocumentFragment();

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
    fragment.append(buildPage(pageNumber));
  }

  termsContainer.append(fragment);
  termsCount.textContent = `${totalPages.toLocaleString("en-GB")} pages generated. Nobody should read all of them.`;
}

generateTerms();
