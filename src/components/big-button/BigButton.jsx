import React from "react";

function BigButton({ action, icon, title }) {
  return (
    <button
      onClick={action}
      className="flex flex-col items-center justify-center h-full min-h-[175px] w-full p-4 text-mineshaft-900 transition duration-500 ease-in-out transform  rounded-[10px] bg-gray-1 hover:bg-mineshaft-100 border-4 border-gray-1 hover:border-epikYellow"
    >
      {icon ? (
        <img src={icon} className="text-4xl h-[188px] mr-4">
          {}
        </img>
      ) : (
        ""
      )}
      <div className="mt-2 text-xl">{title}</div>
    </button>
  );
}

export default BigButton;