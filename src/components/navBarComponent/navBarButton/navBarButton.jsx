import { Link } from "react-router-dom";

export function NavBarButton({ onClick, text, url }) {
  return (
    <>
      <Link to={url}>
        <button
          className="bg-bg-300 py-4 px-8 rounded-md hover:bg-bg-100"
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    </>
  );
}
