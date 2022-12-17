import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayerScouter from './pages/PlayerScouter';
import Player from './pages/Player';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<PlayerScouter />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
  );
}

export default App;
