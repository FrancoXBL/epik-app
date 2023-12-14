import React from "react";

function BigButton({ action, icon, title }) {
  return (
    <button
      onClick={action}
      className="flex flex-row items-center border justify-center w-full h-40 p-4 text-white transition duration-500 ease-in-out transform bg-gray-700 rounded-xl hover:bg-gray-800"
    >
      {icon ? <div className="text-4xl mr-4">{icon}</div> : ""}
      <div className="mt-2 text-xl">{title}</div>
    </button>
  );
}

export default BigButton;
