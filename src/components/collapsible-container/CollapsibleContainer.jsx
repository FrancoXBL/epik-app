import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function CollapsibleContainer({ children, isOpen, onClick, index }) {
  const drawArrow = () => {
    return index === 0 ? <MdArrowForwardIos /> : <MdArrowBackIos />;
  };

  const style = `transition-all h-full ${
    isOpen
      ? "w-full over overflow-y-auto"
      : "w-16 flex justify-center items-center"
  }`;
  return (
    <div className={style} onClick={onClick}>
      {isOpen && children}
      {!isOpen && drawArrow()}
    </div>
  );
}

export default CollapsibleContainer;
