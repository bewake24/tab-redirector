// Replace 'YOUR_URL' with the desired URL you want to redirect to
const URIs = [
  "https://www.linkedin.com/in/bewake24/",
  "https://github.com/bewake24",
  "https://stanaglobal.com/",
  "https://antarmanhfoundation.org/",
  "https://succulenthubindia.com/",
  "https://psnutrihub.in/",
  "https://toorcabs.com/",
  "https://ajmanavta.in/",
  "https://antarmanhfoundation.org",
  "https://collative.in/",
  "https://gf.valeff.com/",
];

// Redirect logic
chrome.tabs.onCreated.addListener(function (tab) {
  const randomIndex = Math.floor(Math.random() * URIs.length);
  const redirectURL = URIs[randomIndex];
  if (tab.pendingUrl === "chrome://newtab/") {
    chrome.tabs.update(tab.id, { url: redirectURL });
  }
});
