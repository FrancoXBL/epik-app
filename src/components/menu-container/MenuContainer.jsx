import React from "react";

function MenuContainer({ cleanContainer, children }) {
  return (
    <div
      className={
        cleanContainer
          ? "h-full"
          : "h-full p-4 border border-radius rounded-xl p16 w-full box-border "
      }
    >
      {children}
    </div>
  );
}

export default MenuContainer;
