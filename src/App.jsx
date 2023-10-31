import Home from "./components/home-component/HomeComponent"
import HistorialVentas from "./components/historial-ventas/HistorialVentas";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/historial-ventas" element={<HistorialVentas />}/>
    </Routes>
  );
}

export default App; 
