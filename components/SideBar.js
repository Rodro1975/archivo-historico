// components/SideBar.js
import React from "react";
import Link from "next/link"; // Importa Link de next/link
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // Importa iconos de react-icons

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white shadow-lg">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Mi Aplicación</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-200"
            >
              <FaHome className="mr-3" />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-200"
            >
              <FaUser className="mr-3" />
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-200"
            >
              <FaCog className="mr-3" />
              <span>Configuraciones</span>
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-200"
            >
              <FaSignOutAlt className="mr-3" />
              <span>Cerrar Sesión</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm">
          © 2024 Archivo Histórico de la Librería UG. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
