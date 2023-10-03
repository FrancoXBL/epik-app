export function NavBarButton({ onClick, text }) {
  return (
    <button className="bg-bg-300 py-4 px-8 rounded-md hover:bg-bg-100" onClick={onClick}>
      {text}
    </button>
  );
}
