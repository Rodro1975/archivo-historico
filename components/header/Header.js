import React, { useEffect, useState } from "react";
import MessagesDropdown from "./MessagesDropdown";
import ModificationsDropdown from "./ModificationsDropdown";
import UserProfile from "./UserProfile"; // Asegúrate de que la ruta sea correcta
import { decode } from "jsonwebtoken";

const Header = () => {
  const [user, setUser] = useState({
    name: "Usuario Desconocido",
    role: "Invitado",
    photo: "/images/juanperez.png", // Ruta a una imagen por defecto
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = decode(token);
        console.log("Datos decodificados:", decoded); // Verificar qué se está decodificando
        if (decoded) {
          setUser({
            name: `${decoded.nombre || "Usuario Desconocido"} ${
              decoded.apellido || ""
            }`, // Nombre y apellido
            role: decoded.rol || "Invitado",
            photo: decoded.photo || "/images/juanperez.png",
          });
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []); // Este efecto se ejecuta una vez al montar el componente.

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
        top: 0,
        left: 0,
        background: "var(--color-gray)", // Fondo con el color azul personalizado
        color: "var(--color-navy)", // Texto dorado personalizado
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Sombra ligera
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px", // Espacio horizontal
          height: "60px", // Altura del header
        }}
      >
        <h1
          style={{
            fontSize: "1.25rem", // Tamaño de fuente
            fontWeight: "bold",
            margin: 0, // Sin margen
            fontFamily: "'Novecento Wide', sans-serif", // Usando la fuente personalizada
          }}
        >
          Archivo Histórico
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <MessagesDropdown />
          <ModificationsDropdown />
          <UserProfile user={user} /> {/* Integración del UserProfile */}
        </div>
      </div>
    </header>
  );
};

export default Header;
