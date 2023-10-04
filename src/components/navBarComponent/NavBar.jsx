import "./navBar.css";
import { NavBarButton } from "./navBarButton/navBarButton";
export function NavBar() {
  return (
    <div className="bg-bg-200 p-8 mb-8">
      <div className="wrapper">
        <div className="flex justify-between w-full">
          <div className="h-full leading-[56px] text-5xl flex items-center">
            🍔
            <span className="font-sans text-2xl align-middle ml-2">
              Epik Burguer
            </span>
          </div>
          <div className="flex  gap-4">
            <NavBarButton
              onClick={() => console.log("Historial de ventas clicked")}
              text="Historial de ventas"
            />
            <NavBarButton
              onClick={() => console.log("Administracion clicked")}
              text="Administracion"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
