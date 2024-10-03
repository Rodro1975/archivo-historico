// app/layout.js
"use client";

import "animate.css";
import "tailwindcss/tailwind.css"; // Tailwind CSS
import "../styles/globals.css"; // Tus estilos globales
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Obtener la ruta actual

  // Definir los títulos para cada ruta
  const getTitle = () => {
    switch (pathname) {
      case "/catalog":
        return "Catálogo - Archivo Histórico Librería UG";
      case "/completeCatalog":
        return "Catálogo Completo - Archivo Histórico Librería UG";
      case "/dashboard":
        return "Panel de Control - Archivo Histórico Librería UG";
      case "/login":
        return "Iniciar Sesión - Archivo Histórico Librería UG";
      case "/register":
        return "Registro - Archivo Histórico Librería UG";
      default:
        return "Archivo Histórico Librería UG"; // Título por defecto
    }
  };

  // Usar el hook de efecto para actualizar el título cuando cambie la ruta
  useEffect(() => {
    document.title = getTitle();
  }, [pathname]);

  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
