import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="Download-button"
          href="/path/to/pwa-file"
          download="your-pwa-file-name.extension"
          onClick={handleDownload}
        >
          Download PWA
        </a>
      </header>
    </div>
  );
}

export default App;
