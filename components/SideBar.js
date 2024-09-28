// components/SideBar.js
import React from "react";
import Link from "next/link"; // Importa Link de next/link
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // Importa iconos de react-icons

const SideBar = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "256px",
        backgroundColor: "var(--color-blue)",
        color: "white",
        boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Efecto de fondo animado */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          height: "64px",
          borderBottom: "2px solid var(--color-gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "var(--color-gold)",
          }}
        >
          Sistema de Gestión
        </h1>
      </div>
      <nav style={{ flexGrow: 1 }}>
        <ul style={{ padding: "16px" }}>
          <li>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                color: "white", // Texto blanco
                borderBottom: "2px solid transparent",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-yellow)")
              } // Amarillo al pasar el mouse
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              } // Vuelve a transparente
            >
              <FaHome style={{ marginRight: "8px" }} />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                color: "white", // Texto blanco
                borderBottom: "2px solid transparent",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-yellow)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <FaUser style={{ marginRight: "8px" }} />
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                color: "white", // Texto blanco
                borderBottom: "2px solid transparent",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-yellow)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <FaCog style={{ marginRight: "8px" }} />
              <span>Configuraciones</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Sección del pie de página con Botón de Cerrar Sesión */}
      <div
        style={{ padding: "16px", borderTop: `2px solid var(--color-gold)` }}
      >
        <Link
          href="/logout"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8px",
            padding: "12px",
            backgroundColor: "#FF0000", // Rojo para el botón de salir
            color: "#ffffff", // Texto blanco
            borderRadius: "4px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#CC0000")
          } // Rojo oscuro al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF0000")
          } // Vuelve a rojo
        >
          <FaSignOutAlt style={{ marginRight: "8px" }} />
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
