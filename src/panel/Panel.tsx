import React from 'react';

// Using Record<never, never> instead of empty interface
type PanelProps = Record<string, never>;

const Panel: React.FC<PanelProps> = () => {
  return (
    <div className="panel-container">
      <header className="panel-header">
        <h1>Energy Enables DevTools</h1>
      </header>
      <main className="panel-content">
        <div className="welcome-message">
          <h2>Hello World!</h2>
          <p>Welcome to your custom DevTools panel.</p>
          <p>This panel can be extended to build internal tools for Energy Enables.</p>
        </div>
      </main>
    </div>
  );
};

export default Panel;
