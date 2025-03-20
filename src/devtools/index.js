// Create a panel in Chrome DevTools
chrome.devtools.panels.create(
  "Energy Enables", // Panel title
  null, // No icon path
  "panel.html", // Panel HTML page
  (panel) => {
    // Panel created callback
    console.log("Energy Enables DevTools panel created");
  }
);
