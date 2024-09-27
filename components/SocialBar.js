// components/SocialBar.js
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // Importa iconos de react-icons
import { SiX } from "react-icons/si"; // Importa el icono de X

const SocialBar = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800">
      {/* Barra de búsqueda (pantallas grandes) */}
      <div className="relative mb-4 md:mb-0 md:w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar-md"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar..."
        />
      </div>

      {/* Iconos de redes sociales */}
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-600 transition duration-300"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://x.com" // Enlace a X (antes Twitter)
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transition duration-300"
        >
          <SiX size={24} /> {/* Icono de X */}
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transition duration-300"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
