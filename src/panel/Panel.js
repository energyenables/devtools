import React from 'react';

const Panel = () => {
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
