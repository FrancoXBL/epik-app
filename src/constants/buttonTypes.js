import ArrowBack from "../assets/arrow_back.svg?react";
import DeleteFill from "../assets/delete_fill.svg?react";
export const BUTTON_TYPES = {
  secondary: {
    color: "bg-secondary-normal",
    hover: "hover:bg-secondary-hover",
    icon: ArrowBack,
    haveIcon: true,
    text: "",
    iconColor: "#000",
  },
  confirm: {
    color: "bg-confirm-normal",
    hover: "hover:bg-confirm-hover",
    icon: null,
    haveIcon: false,
    text: "Confirmar pedido",
    iconColor: "#000",
  },
  delete: {
    color: "bg-delete-normal",
    hover: "hover:bg-delete-hover",
    icon: DeleteFill,
    haveIcon: true,
    text: "",
    iconColor: "#fff",
  },
};
