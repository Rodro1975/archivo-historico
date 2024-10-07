import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { decode } from "jsonwebtoken";

const WorkBar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [isResearch, setIsResearch] = useState(false);
  const [isReader, setIsReader] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = decode(token);
        if (decoded.rol === "Administrador") {
          setIsAdmin(true);
        } else if (decoded.rol === "Editor") {
          setIsEditor(true);
        } else if (decoded.rol === "Investigador") {
          setIsResearch(true);
        } else if (decoded.rol === "Lector") {
          setIsReader(true);
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white shadow-lg border-[#E5E7EB] dark:bg-[#111827] text-[#1E3A8A] h-48 flex flex-col items-center justify-center">
      {/* Logo en el centro */}
      <div className="flex items-center mb-8">
        <Image
          src="/images/logo_libreria.png"
          alt="Logo librería GTO"
          width={150}
          height={150}
        />
      </div>

      {/* Enlaces específicos para cada tipo de usuario */}
      <div className="flex space-x-8">
        <Link href="/" className="hover:text-[#FFD700] font-bold">
          Inicio
        </Link>
        {isAdmin && (
          <>
            <Link
              href="/admin/users"
              className="hover:text-[#FFD700] font-bold"
            >
              Gestionar Usuarios
            </Link>
            <Link
              href="/admin/books"
              className="hover:text-[#FFD700] font-bold"
            >
              Gestionar Libros
            </Link>
            <Link
              href="/admin/reports"
              className="hover:text-[#FFD700] font-bold"
            >
              Reporte 1
            </Link>
            <Link
              href="/admin/reports2"
              className="hover:text-[#FFD700] font-bold"
            >
              Reporte 2
            </Link>
          </>
        )}
        {isEditor && (
          <>
            <Link
              href="/editor/books"
              className="hover:text-[#FFD700] font-bold"
            >
              Modificar Libros
            </Link>
            <Link
              href="/editor/reports"
              className="hover:text-[#FFD700] font-bold"
            >
              Descargar Reportes
            </Link>
          </>
        )}
        {isResearch && (
          <>
            <Link
              href="/research/search"
              className="hover:text-[#FFD700] font-bold"
            >
              Búsqueda Avanzada
            </Link>
            <Link
              href="/research/statistics"
              className="hover:text-[#FFD700] font-bold"
            >
              Estadísticas
            </Link>
          </>
        )}
        {isReader && (
          <>
            <Link
              href="/reader/search"
              className="hover:text-[#FFD700] font-bold"
            >
              Buscar Publicaciones
            </Link>
          </>
        )}
        <Link href="/dashboard" className="hover:text-[#FFD700] font-bold">
          Volver al Dashboard
        </Link>

        {/* Botón para cerrar sesión */}
        <button
          onClick={handleLogout}
          className="hover:text-[#FFD700] font-bold"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default WorkBar;
