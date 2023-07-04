// content.js

// Create a new window to open the EaglerCraft game
const openEaglerCraftGame = () => {
  window.open(chrome.runtime.getURL('eaglercraft.html'), '_blank');
};

// Listen for the message from the popup to open the EaglerCraft game
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'open_game') {
    openEaglerCraftGame();
    sendResponse({ result: 'Game opened successfully.' });
  }
});

