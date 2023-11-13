import Home from "./components/home-component/HomeComponent"
import HistorialVentas from "./components/historial-ventas/HistorialVentas";
import AdmComponent from "./components/administration-component/AdmComponent";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/historial-ventas" element={<HistorialVentas />}/>
      <Route path="/admin" element={<AdmComponent />}/>
    </Routes>
  );
}

export default App; 
