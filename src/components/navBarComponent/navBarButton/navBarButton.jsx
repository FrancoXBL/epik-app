import { Link } from "react-router-dom";

export function NavBarButton({ button, active, click }) {
  return (
    <Link to={button.path} onClick={click}>
      <div className={` p-[5px]`}>
        {active ? <button.activeIcon /> : <button.icon />}
      </div>
    </Link>
  );
}
