
import Home from "./components/home-component/HomeComponent"
import { Toaster } from "react-hot-toast";
import HistorialVentas from "./components/historial-ventas/HistorialVentas";
import AdmComponent from "./components/administration-component/AdmComponent";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/historial-ventas" element={<HistorialVentas />}/>
      <Route path="/admin" element={<AdmComponent />}/>
    </Routes>
   <Toaster
        position="bottom-center"
        toastOptions={toastConfig}
      />
</div>

  );
}

export default App; 
