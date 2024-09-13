import React, { useEffect, useRef } from "react";

export const Modal = ({ children, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
   
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);
    
   
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-4 shadow-lg w-full max-w-md relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
