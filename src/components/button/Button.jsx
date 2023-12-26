import React from "react";
import ArrowBack from "../../assets/arrow_back.svg?react";
import { BUTTON_TYPES } from "../../constants/buttonTypes";
import "./Button.css";
export function Button({ action, disabled, type = BUTTON_TYPES.confirm }) {
  return (
    <button
      style={{ color: type.iconColor }}
      className={`p-24px text-xl rounded-button h-full w-full flex justify-center box-border text-mineshaft-100 ${
        type.color
      } ${disabled ? "cursor-not-allowed opacity-50" : type.hover}`}
      onClick={action}
    >
      {type.haveIcon && (
        <type.icon  style={{ "--color": `${type.iconColor}` }} />
      )}
      {type.text}
    </button>
  );
}
