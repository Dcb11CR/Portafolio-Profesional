
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   // Si deseas usar un CSS global

import Home from './components/Home';
import Intro from './components/Intro';
import Carta from './components/Carta';
import Evidencias from "./components/Evidencias";
import CV from "./components/CV";
import Diferencia from "./components/Diferencia";
import Contacto from "./components/Contacto";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<Intro />} /> 
          <Route path="/Carta" element={<Carta />} />
          <Route path="/Evidencias" element={<Evidencias />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Diferencia" element={<Diferencia />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



