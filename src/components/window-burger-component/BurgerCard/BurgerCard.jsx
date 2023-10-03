import "./BurgerCard.css";
export function BurgerCard({ burger }) {
  const buttoncss = "ml-1 bg-bg-100 w-10 h-10 rounded-md bg-primary-200 text-bg-200"
  return (
    <div className="flex py-1 border-b border-b-bg-100">
      <div className="flex-1 leading-10 h-10">
        <p>{burger}</p>
      </div>
      <div className="flex-1 flex justify-end ml-8">
        <button className={`${buttoncss}`}>1</button>
        <button className={`${buttoncss}`}>2</button>
        <button className={`${buttoncss}`}>3</button>
      </div>
    </div>
  );
}
