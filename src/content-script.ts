const button = document.createElement("button");
button.innerHTML = "SAMPLE";

// sample button style
button.style.padding = "16px";
button.style.marginLeft = "4px";
button.style.background = "red";
button.style.borderRadius = "4px";

// sample event
button.addEventListener("click", () => {
  console.log("SAMPLE button click!");

  chrome.runtime.sendMessage({ message: "buttonClick" }).then((response) => {
    if (response.type === "popupResponse") {
      button.style.color = response.fontColor;
    }
  }).catch((error) => {
    console.log({ error });
    button.style.color = "green";
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log({ sender });
  if (request.type === "load") {
    alert(request.message);
    sendResponse({ type: "success" });
  }
});

document.querySelector("a") &&
  document.querySelector("a")?.parentElement?.appendChild(button);
