// components/NavBar.js
"use client"; // Asegúrate de que este es un Client Component

import "animate.css";
import Image from "next/image"; // Importa el componente Image
import { useState } from "react"; // Importa useState
import { usePathname } from "next/navigation"; // Cambia esto a next/navigation

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname(); // Aquí obtenemos la ruta actual

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logotipo UGTO */}
        <a
          href="https://www.ugto.mx/index.php"
          className="flex items-center space-x-3 rtl:space-x-reverse relative w-32 h-10"
        >
          <Image
            src="/images/escudo-horizontal-png.png"
            alt="UGTO Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuste para tamaños de pantalla
            priority // Indica que esta imagen tiene prioridad para el LCP
            className="object-contain"
          />
        </a>

        {/* Logotipo Librería */}
        <a
          href="https://libreriaug.ugto.mx/"
          className="flex items-center space-x-3 rtl:space-x-reverse relative w-32 h-10"
        >
          <Image
            src="/images/Logo_libreria.png"
            alt="Libreria Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuste para tamaños de pantalla
            priority // Indica que esta imagen tiene prioridad para el LCP
            className="object-contain"
          />
        </a>

        {/* Menú Hamburguesa (pantallas pequeñas) */}
        <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-controls="navbar-search"
            aria-expanded={isOpen}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
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
                d="M3 5h14M3 10h14M3 15h14"
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Menú de navegación y barra de búsqueda (pantallas pequeñas) */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-search"
        >
          {/* Menú de navegación */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 text-[#003c71] ${
                  currentPath === "/" ? "animate__animated animate__hinge" : ""
                } font-semibold`}
                aria-current={currentPath === "/" ? "page" : undefined}
              >
                Archivo Histórico
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={`block py-2 px-3 text-[#003c71] ${
                  currentPath === "/login"
                    ? "animate__animated animate__hinge"
                    : ""
                } font-semibold`}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className={`block py-2 px-3 text-[#003c71] ${
                  currentPath === "/register"
                    ? "animate__animated animate__hinge"
                    : ""
                } font-semibold`}
              >
                Regístrate
              </a>
            </li>
            <li>
              <a
                href="/catalog"
                className={`block py-2 px-3 text-[#003c71] ${
                  currentPath === "/catalog"
                    ? "animate__animated animate__hinge"
                    : ""
                } font-semibold`}
                aria-current={currentPath === "/catalog" ? "page" : undefined}
              >
                Catálogo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
