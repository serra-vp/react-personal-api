import React from 'react';
import { HashRouter } from 'react-router-dom'; 

import Header from './Components/Header/Header';
import Routes from './routes';

function App() {
  return (
      <HashRouter>
        <Header />
        <main>
          <div className="container">
            <Routes />
          </div>
        </main>
      </HashRouter>
  );
}

export default App;
