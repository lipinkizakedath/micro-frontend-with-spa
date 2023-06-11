import React from 'react';
import MarketingApp from './components/MarketingApp';

function App() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'orange', color: 'white' }}>
        Micro frontend - Its a three different app bundled with webpack
      </h1>
      <hr />
      <MarketingApp />
    </div>
  );
}

export default App;
