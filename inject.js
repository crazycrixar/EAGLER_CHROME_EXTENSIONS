// inject.js

// Create a new iframe to open the EaglerCraft game
const iframe = document.createElement('iframe');
iframe.src = chrome.runtime.getURL('eaglercraft.html');
iframe.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 999999;
`;
document.documentElement.appendChild(iframe);
