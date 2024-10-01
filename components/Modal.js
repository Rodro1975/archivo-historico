// components/Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-0 max-w-lg mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times; {/* Icono de cerrar */}
        </button>
        <div className="relative w-full h-182">
          <img
            src="/images/panelBeeF.png" // Reemplaza con la ruta de tu imagen
            alt="nodal informativo"
            className="object-cover w-full h-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
