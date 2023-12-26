import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function CollapsibleContainer({ children, isOpen, onClick, index }) {
  const drawArrow = () => {
    return index === 0 ? <MdArrowForwardIos /> : <MdArrowBackIos />;
  };

  const style = `transition-all ${
    isOpen
      ? "w-full overflow-y-auto h-[412px] rounded-[10px]"
      : "w-16 h-[412px] flex justify-center items-center bg-gray-1 hover:bg-mineshaft-100 cursor-pointer transition-all rounded-xl ease-in-out duration-300"
  }`;
  return (
    <div className={style} onClick={onClick}>
      {isOpen && children}
      {!isOpen && drawArrow()}
    </div>
  );
}

export default CollapsibleContainer;
