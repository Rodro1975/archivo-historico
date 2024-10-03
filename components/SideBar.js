// components/Sidebar.js
import React, { useState } from "react";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <aside
      className="sidebar"
      style={{
        padding: "20px",
        background: "var(--color-blue)",
        color: "var(--color-white)",
        width: "250px",
        marginTop: "60px", // Margen superior para que inicie debajo del header
      }}
    >
      <h2>Menú</h2>
      <ul className="space-y-2">
        {/* Elemento Archivo con submenú */}
        <li>
          <div
            className="flex justify-between items-center p-2 bg-gray-200 hover:bg-yellow text-gray-900 hover:text-blue cursor-pointer"
            onClick={() => toggleAccordion(0)}
          >
            <span className="font-semibold">Archivo</span>
            <span>{openIndex === 0 ? "-" : "+"}</span>
          </div>
          {openIndex === 0 && (
            <ul className="pl-4 space-y-1">
              <li>
                <a
                  href="/archivo/submenu1"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 1
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu2"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 2
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu3"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 3
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Elemento Libros con submenú */}
        <li>
          <div
            className="flex justify-between items-center p-2 bg-gray-200 hover:bg-yellow text-gray-900 hover:text-blue cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <span className="font-semibold">Libros</span>
            <span>{openIndex === 1 ? "-" : "+"}</span>
          </div>
          {openIndex === 1 && (
            <ul className="pl-4 space-y-1">
              <li>
                <a
                  href="/archivo/submenu1"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 1
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu2"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 2
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu3"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 3
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Elemento Autores con submenú */}
        <li>
          <div
            className="flex justify-between items-center p-2 bg-gray-200 hover:bg-yellow text-gray-900 hover:text-blue cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <span className="font-semibold">Autores</span>
            <span>{openIndex === 2 ? "-" : "+"}</span>
          </div>
          {openIndex === 2 && (
            <ul className="pl-4 space-y-1">
              <li>
                <a
                  href="/archivo/submenu1"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 1
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu2"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 2
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu3"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 3
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Elemento Consultas con submenú */}
        <li>
          <div
            className="flex justify-between items-center p-2 bg-gray-200 hover:bg-yellow text-gray-900 hover:text-blue cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <span className="font-semibold">Consultas</span>
            <span>{openIndex === 3 ? "-" : "+"}</span>
          </div>
          {openIndex === 3 && (
            <ul className="pl-4 space-y-1">
              <li>
                <a
                  href="/archivo/submenu1"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 1
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu2"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 2
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu3"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 3
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Elemento Reportes con submenú */}
        <li>
          <div
            className="flex justify-between items-center p-2 bg-gray-200 hover:bg-yellow text-gray-900 hover:text-blue cursor-pointer"
            onClick={() => toggleAccordion(4)}
          >
            <span className="font-semibold">Reportes</span>
            <span>{openIndex === 4 ? "-" : "+"}</span>
          </div>
          {openIndex === 4 && (
            <ul className="pl-4 space-y-1">
              <li>
                <a
                  href="/archivo/submenu1"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 1
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu2"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 2
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu3"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 3
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Elemento Solicitudes con submenú */}
        <li>
          <div
            className="flex justify-between items-center p-2 bg-gray-200 hover:bg-yellow text-gray-900 hover:text-blue cursor-pointer"
            onClick={() => toggleAccordion(5)}
          >
            <span className="font-semibold">Solicitudes</span>
            <span>{openIndex === 5 ? "-" : "+"}</span>
          </div>
          {openIndex === 5 && (
            <ul className="pl-4 space-y-1">
              <li>
                <a
                  href="/archivo/submenu1"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 1
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu2"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 2
                </a>
              </li>
              <li>
                <a
                  href="/archivo/submenu3"
                  className="relative text-white hover:text-yellow transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-orange hover:before:w-full before:transition-all before:duration-300"
                >
                  Submenú 3
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Elemento Usuarios con submenú */}
        {/* Elemento Usuarios con submenú */}
        {/* Puedes cambiar el índice según corresponda */}
        {/* Elemento Usuarios con submenú */}
        {/* Puedes cambiar el índice según corresponda */}

        {/* Elemento Usuarios con submenú */}
        {/* Puedes cambiar el índice según corresponda */}

        {/* Elemento Usuarios con submenú */}
        {/* Puedes cambiar el índice según corresponda */}

        {/* Elemento Usuarios con submenú */}
        {/* Puedes cambiar el índice según corresponda */}
      </ul>

      {/* Otras secciones como Últimos Documentos Consultados y Área de Formularios se pueden mantener aquí como estaban antes */}

      {/* Aquí puedes añadir otras secciones como Últimos Documentos Consultados y Área de Formularios si lo deseas */}

      {/* Sección de Últimos Documentos Consultados (puedes mantenerla o eliminarla) */}

      {/* Aquí puedes añadir otras secciones como Últimos Documentos Consultados y Área de Formularios si lo deseas */}

      {/* Sección de Área de Formularios (puedes mantenerla o eliminarla) */}

      {/* Aquí puedes añadir otras secciones como Últimos Documentos Consultados y Área de Formularios si lo deseas */}
    </aside>
  );
};

export default Sidebar;
