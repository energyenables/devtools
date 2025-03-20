// Create a panel in Chrome DevTools
chrome.devtools.panels.create(
  "Energy Enables", // Panel title
  "", // No icon path (empty string instead of null)
  "panel.html", // Panel HTML page
  (panel) => {
    // Panel created callback
    console.log("Energy Enables DevTools panel created");
  }
);
