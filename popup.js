// popup.js

// Open a new popup window with the EaglerCraft game
const openGame = () => {
  const width = 800;
  const height = 600;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;

  const popupWindow = window.open(
    chrome.runtime.getURL('eaglercraft.html'),
    'EaglerCraft',
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );

  console.log('Game opened successfully.');
};

// Attach the click event listener to the play button once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', openGame);
});
