import React from "react";

function MenuContainer({ cleanContainer, children }) {
  return (
    <div
      className={
        cleanContainer
          ? "h-full"
          : "h-full border-radius rounded-[20px] w-full box-border p-16px bg-white"
      }
    >
      {children}
    </div>
  );
}

export default MenuContainer;
