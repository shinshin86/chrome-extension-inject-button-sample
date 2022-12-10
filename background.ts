console.log("Start background.ts(Service worker)");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "buttonClick") {
    sendResponse({ type: "popupResponse", fontColor: "white" });
  }
});
