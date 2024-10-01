// components/Header/MessagesDropdown.js
import React, { useState } from "react";

const MessagesDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Simulación de mensajes
  const messages = [
    { id: 1, text: "Nuevo comentario en tu publicación.", time: "5 min ago" },
    { id: 2, text: "Tienes una nueva solicitud.", time: "10 min ago" },
    {
      id: 3,
      text: "Actualización disponible para tu perfil.",
      time: "1 hr ago",
    },
  ];

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center">
        <i className="fa fa-comments" style={{ fontSize: "20px" }}></i>{" "}
        {/* Ícono de mensajes */}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <div className="p-2">
            {messages.length === 0 ? (
              <p>No tienes mensajes.</p>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  <p>{message.text}</p>
                  <span className="text-gray-500 text-sm">{message.time}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesDropdown; // Asegúrate de tener esta línea
