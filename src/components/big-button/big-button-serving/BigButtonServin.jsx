import React from "react";

function BigButtonServing({ action, icon, name, price, isSelected }) {

  return (
    <button
      onClick={action}
      className={
        isSelected
          ? " flex flex-col items-center justify-center h-full min-h-[175px] w-full m-auto text-mineshaft-950 transition duration-500 ease-in-out transform rounded-[10px] bg-gray-2/30 hover:bg-mineshaft-100 border-4 border-confirm-hover"

          : 
          
          "flex flex-col items-center justify-center h-full min-h-[175px] w-full p-4 m-auto text-mineshaft-900 transition duration-500 ease-in-out transform rounded-[10px] bg-gray-1 hover:bg-mineshaft-100 border-4 border-gray-1 hover:border-epikYellow"
      }
    >
      {icon ? (
        <img src={icon} className="text-4xl h-[188px] mr-4">
          {}
        </img>
      ) : (
        ""
      )}
      <div className="mt-2 text-2xl">{name}</div>
      <div className="text-green-main mt-2 text-3xl">{price}</div>
    </button>
  );
}

export default BigButtonServing;
