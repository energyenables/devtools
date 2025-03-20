import React from 'react';
import { createRoot } from 'react-dom/client';
import Panel from './Panel';
import './styles.css';

// Render the React component to the panel
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Panel />);
} else {
  console.error('Root element not found');
}
