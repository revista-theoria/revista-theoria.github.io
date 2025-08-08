import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archivo from "./pages/Archivo";
import Convocatoria from "./pages/Convocatoria";
import Contacto from "./pages/Contacto";
import Visualizar from "./pages/Visualizar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archivo" element={<Archivo />} />
        <Route path="/convocatoria" element={<Convocatoria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/visualizar/:numeroEdicion" element={<Visualizar />} />
      </Routes>
    </Router>
  );
}

export default App;
