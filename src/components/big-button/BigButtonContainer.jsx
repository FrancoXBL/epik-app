import React from "react";

function BigButtonContainer({children}) {
  return <div className="grid grid-cols-2 gap-4 h-full">{children}</div>;
}

export default BigButtonContainer;
