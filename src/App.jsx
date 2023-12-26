import Home from "./components/home-component/HomeComponent";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./data/toastData";
import HistorialVentas from "./components/historial-ventas/HistorialVentas";
import AdmComponent from "./components/administration-component/AdmComponent";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navBarComponent/NavBar";

function App() {
  return (
    <>
      <div className="flex w-screen">
        <NavBar />
        <div className="h-screen w-screen bg-gray-1 flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<HistorialVentas />} />
            <Route path="/settings" element={<AdmComponent />} />
          </Routes>
        </div>
      </div>
      <Toaster position="bottom-center" toastOptions={toastConfig} />
    </>
  );
}

export default App;
