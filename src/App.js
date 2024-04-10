import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  </Container>
    
  );
}

export default App;
