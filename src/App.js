import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayerScouter from './pages/PlayerScouter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<PlayerScouter />} />
    </Routes>
  );
}

export default App;
