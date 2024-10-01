"use client"; // Asegúrate de que esta línea esté presente si usas estados o efectos
import React, { useEffect, useState } from "react";
import PanelAdmin from "../../components/PanelAdmin";
import PanelEditor from "../../components/PanelEditor"; // Importar el PanelEditor
import PanelResearch from "../../components/PanelResearch";
import PanelReader from "../../components/PanelReader";
import { decode } from "jsonwebtoken"; // Asegúrate de que está correctamente importado
import Header from "../../components/header/Header";
import Sidebar from "../../components/SideBar"; // Importa la Sidebar

const DashboardPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [isResearch, setIsResearch] = useState(false);
  const [isReader, setIsReader] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token en el dashboard:", token);

    if (token) {
      try {
        const decoded = decode(token);
        console.log("Token decodificado:", decoded); // Para depurar

        // Verifica los roles
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

  return (
    <div
      style={{ display: "flex", backgroundColor: "orange", minHeight: "100vh" }}
    >
      <Header /> {/* Aquí se integra el Header */}
      <Sidebar /> {/* Aquí se integra la Sidebar */}
      <div style={{ flex: 1, padding: "20px", marginTop: "60px" }}>
        {" "}
        {/* Flex para contenido principal */}
        <h1 style={{ textAlign: "center", color: "white" }}>
          Bienvenido al Dashboard
        </h1>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "white" }}>
            Aquí es donde irán tus componentes o información específica del
            dashboard.
          </p>
          {/* Mostrar PanelAdmin si el usuario es administrador */}
          {isAdmin && <PanelAdmin />}
          {/* Mostrar PanelEditor si el usuario es editor */}
          {isEditor && <PanelEditor />}
          {/* Mostrar PanelResearch si el usuario es investigador */}
          {isResearch && <PanelResearch />}
          {/* Mostrar PanelReader si el usuario es lector */}
          {isReader && <PanelReader />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
