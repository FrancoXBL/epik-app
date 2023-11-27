import Home from "./components/home-component/HomeComponent";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./data/toastData";
import HistorialVentas from "./components/historial-ventas/HistorialVentas";
import AdmComponent from "./components/administration-component/AdmComponent";
import { NavBar } from "./components/navBarComponent/NavBar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar
        buttonHome={{ route: "/", text: "Home" }}
        buttonAdm={{ route: "/admin", text: "Administracion" }}
        buttonHistory={{ route: "/historial-ventas", text: "Historia Ventas" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial-ventas" element={<HistorialVentas />} />
        <Route path="/admin" element={<AdmComponent />} />
      </Routes>
      <Toaster position="bottom-center" toastOptions={toastConfig} />
    </div>
  );
}

export default App;
