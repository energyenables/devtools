// Background script for the extension
console.log("Energy Enables DevTools Extension background script loaded");

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Energy Enables DevTools Extension installed");
});
