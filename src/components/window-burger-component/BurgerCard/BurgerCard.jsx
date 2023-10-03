
import './BurgerCard.css'
export function BurgerCard({ burger }) {
  return (
    <div className="flex">
    <div className="flex-1">
      <p>{burger}</p>
    </div>
    <div className="flex-1 flex justify-end">
      <button className="mx-1">1</button>
      <button className="mx-1">2</button>
      <button className="mx-1">3</button>
    </div>
  </div>
  );
}
