# Energy Enables DevTools Extension

A custom Chrome DevTools extension with a React-based panel for internal tools.

## Overview

This Chrome DevTools extension adds a custom panel to Chrome DevTools that can be used to build and host internal tools for Energy Enables.

## Features

- Custom DevTools panel with React
- "Hello World" starter implementation
- Ready for extending with additional functionality

## Development Setup

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/energyenables/devtools.git
   cd devtools
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the extension:
   ```
   npm run build
   ```

   For development with auto-rebuild:
   ```
   npm start
   ```

### Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top right corner
3. Click "Load unpacked" and select the `dist` directory from this project
4. Open Chrome DevTools (F12 or right-click and select "Inspect") in any page
5. You should see a new "Energy Enables" panel in the DevTools

## Project Structure

- `src/panel/` - React components for the DevTools panel
- `src/devtools/` - DevTools integration code
- `src/background/` - Extension background script
- `public/` - Static assets and HTML templates

## Building for Production

```
npm run build
```

The built extension will be in the `dist` directory, ready to be loaded into Chrome.

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

Proprietary - Energy Enables
