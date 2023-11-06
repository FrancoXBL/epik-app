import "./navBar.css";
import { NavBarButton } from "./navBarButton/navBarButton";
export function NavBar({button1, button2}) {
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
              url={`${button1.route}`}
              text={`${button1.text}`}
            />
            <NavBarButton
              url={`${button2.route}`}
              text={`${button2.text}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
