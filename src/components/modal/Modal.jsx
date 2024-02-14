import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children, isOpen, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false);


  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementById("root").style.filter = "none";
    } else {
      document.getElementById("root").style.filter = "none";
    }
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full  flex items-center justify-center bg-black bg-opacity-30 m-1">
      <div className="w-4/6 flex p-4 rounded shadow-lg overflow-auto max-h-full">
        {children}
      </div>
      <button
        onClick={handleCloseClick}
        className="fixed top-0 right-0 left-0 bottom-0 bg-mineshaft-900/50 -z-10 border"
      >
        Close
      </button>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;