chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("active tab:", tabs[0]);

  // load view
  load(tabs[0]);

  // send alert message
  chrome.tabs.sendMessage(
    tabs[0].id || 0,
    { type: "load", message: "Displayed popup" },
    {},
    (response) => {
      console.log("=== content-script response ===");
      console.log({ response });
    },
  );
});

const load = (currentTab) => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    Access <a href="https://www.google.com/">Google</a>.<br />
    You will see one unfamiliar button added.<br />
    Your active tabs: ${currentTab?.id || "not found active tab..."}
  </div>`;
};
