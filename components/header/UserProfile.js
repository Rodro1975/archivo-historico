// components/Header/UserProfile.js
import { useState } from "react";
import Image from "next/image";

const UserProfile = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token del almacenamiento local
    window.location.href = "/login"; // Redirigir a la página de inicio de sesión
  };

  // Para depurar, muestra el contenido del usuario en la consola
  console.log("Datos del usuario en UserProfile:", user);

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center">
        <Image
          src={user.photo} // URL de la imagen del usuario
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="ml-2">{user.name}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <div className="p-2 text-gray-700">{user.role}</div>
          <hr />
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">
            Ver Perfil
          </a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-200">
            Configuraciones
          </a>
          {/* Botón para cerrar sesión */}
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
