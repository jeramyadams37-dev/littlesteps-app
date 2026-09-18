import { useState } from 'react';
import Home from './components/Home';
import Literacy from './components/Literacy';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div className="app">
      {screen === 'home' && <Home onSelect={setScreen} />}
      {screen === 'literacy' && <Literacy onDone={() => setScreen('home')} />}
      {(screen === 'math' || screen === 'science' || screen === 'manners') && (
        <div className="placeholder">
          <h2>Coming soon!</h2>
          <button className="back-btn" onClick={() => setScreen('home')}>Back to Home</button>
        </div>
      )}
    </div>
  );
}
