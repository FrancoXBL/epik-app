import { useContext, useEffect } from "react";
import { AppContext } from "../../../provider/AppProvider";

export function TicketFooter({ totalMount }) {
  const { total, setTotal } = useContext(AppContext);

  // let newMount = 0;

  // totalMount.map((item) => {
  //   item.map((item) => {
  //     newMount += parseInt(item.price);
  //   });
  // });

  // useEffect(() => {
  //   // setTotal(newMount);
  // })

  return (
    <div>
      <span>Total:</span>
      <span>{total}</span>
    </div>
  );
}
