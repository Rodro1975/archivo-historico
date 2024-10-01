// components/Header/ModificationsDropdown.js
import React, { useState } from "react";

const ModificationsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center">
        <i className="fa fa-edit" style={{ fontSize: "20px" }}></i>{" "}
        {/* Ícono de hoja con lápiz */}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <a href="/edit" className="block px-4 py-2 hover:bg-gray-200">
            Editar
          </a>
          <a href="/delete" className="block px-4 py-2 hover:bg-gray-200">
            Eliminar
          </a>
          <a href="/update" className="block px-4 py-2 hover:bg-gray-200">
            Actualizar
          </a>
          <a href="/create" className="block px-4 py-2 hover:bg-gray-200">
            Crear
          </a>
        </div>
      )}
    </div>
  );
};

export default ModificationsDropdown; // Asegúrate de tener esta línea
