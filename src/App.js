import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

let Home = false;

function App() {
  return (
    <Router>
      <div className="App">
        {!Home && <Navbar />}
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
