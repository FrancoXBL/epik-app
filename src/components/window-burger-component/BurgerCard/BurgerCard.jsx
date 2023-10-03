
export function BurgerCard({ burger }) {
  return (
    <div className="burgerCard">
      <div className="">
        <p>{burger}</p>
      </div>
      <div className="">
        <button className="">1</button>
        <button className="">2</button>
        <button className="" >3</button>
      </div>
    </div>
  );
}
