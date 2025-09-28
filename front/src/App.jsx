import { Routes, Route } from 'react-router-dom'; // Убрали BrowserRouter
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;