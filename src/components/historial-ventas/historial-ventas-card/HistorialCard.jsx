import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_SALE } from "../../../provider/actions";
import { useEffect } from "react";
import axios from 'axios'
import API_KEY from "../../../constants/api";
import MenuContainer from "../../menu-container/MenuContainer";
export function HistorialCard({ saleCard, setFilteredList }) {
  const { dispatch } = useContext(AppContext);
  
  const handleDeleteClick = (id) => {
    dispatch({ type: DELETE_SALE, payload: { id } });
  };

  useEffect(() => {
    axios.get(`${API_KEY}sales-history`).then((res) => {
      setFilteredList(res.data);
    });
  }, [handleDeleteClick]);


  return (
    <>
    <MenuContainer>
      <div>
        <span>
          {saleCard.sale.ticket.client.name} - {saleCard.sale.ticket.client.address.street}{" "}
          {saleCard.sale.ticket.client.address.number}, ${saleCard.sale.ticket.total}
        </span>
        <span>{saleCard.payMethod}</span>
        <button onClick={() => 
          handleDeleteClick(saleCard._id)
          
          }>❌</button>
      </div>
    </MenuContainer>
    </>
  );
}
