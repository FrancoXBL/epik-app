import "./navBar.css";
import { useState } from "react";
import { NavBarButton } from "./navBarButton/navBarButton";
import {
  HOME_BUTTON,
  STATISTICS_BUTTON,
  SETTINGS_BUTTON,
} from "../../constants/navButtons";
export function NavBar() {
  const [active, setActive] = useState(0);

  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <div className="fixed left-0 top-1/4 wrapper--vertical ">
      <div className="flex h-full justify-between ">
        <div className="flex h-full flex-col justify-between p-[6px]">
          <div className="flex flex-col gap-[10px]">
            <NavBarButton
              click={() => handleActive(0)}
              active={active === 0}
              button={HOME_BUTTON}
            />
            <NavBarButton
              click={() => handleActive(1)}
              active={active === 1}
              button={STATISTICS_BUTTON}
            />
          </div>
          <div>
            <NavBarButton
              click={() => handleActive(2)}
              active={active === 2}
              button={SETTINGS_BUTTON}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
