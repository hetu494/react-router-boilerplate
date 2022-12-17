import './App.css';

import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import PlayerScouter from './pages/PlayerScouter';
import Player from './pages/Player';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/player/:id">Player Data</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<PlayerScouter />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
    
    </>
  );
}

export default App;
