import React from "react";
import Link from "next/link"; // Asegúrate de importar Link desde next/link
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // Importa los iconos

const SideBar = ({ isOpen }) => {
  const liStyle = {
    listStyle: "none",
    margin: "10px 0",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginRight: "8px",
  };

  const logoutStyle = {
    textDecoration: "none",
    color: "red", // Cambia el color según tu preferencia
    display: "flex",
    alignItems: "center",
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "lightgray",
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-250px", // Mover fuera de vista si está cerrado
        transition: "right 0.3s ease",
        overflowY: "auto", // Permitir desplazamiento si es necesario
      }}
    >
      <h2>Menú</h2>
      <nav>
        <ul>
          {/* Links del menú */}
          <li style={liStyle}>
            <Link href="/" style={linkStyle}>
              <FaHome style={iconStyle} />
              <span>Inicio</span>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/profile" style={linkStyle}>
              <FaUser style={iconStyle} />
              <span>Perfil</span>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/settings" style={linkStyle}>
              <FaCog style={iconStyle} />
              <span>Configuraciones</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div
        style={{
          borderTop: "2px solid var(--color-gold)",
          paddingTop: "16px",
        }}
      >
        <Link href="/logout" style={logoutStyle}>
          <FaSignOutAlt style={{ marginRight: "8px" }} />
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
