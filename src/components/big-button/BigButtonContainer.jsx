import React from "react";

function BigButtonContainer({children}) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

export default BigButtonContainer;
