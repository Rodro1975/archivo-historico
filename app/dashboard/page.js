"use client"; // Asegúrate de que esta línea esté presente si usas estados o efectos
import React, { useEffect, useState } from "react";
import PanelAdmin from "../../components/PanelAdmin";
import PanelEditor from "../../components/PanelEditor"; // Importar el PanelEditor
import PanelResearch from "../../components/PanelResearch";
import PanelReader from "../../components/PanelReader";
import { decode } from "jsonwebtoken"; // Asegúrate de que está correctamente importado
import Header from "../../components/header/Header";
import Sidebar from "../../components/SideBar"; // Importa la Sidebar
import FooterDash from "../../components/FooterDash"; // Importa el footer

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
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <Header /> {/* Aquí se integra el Header */}
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar /> {/* Aquí se integra la Sidebar */}
        <div style={{ flex: 1, padding: "20px", marginTop: "60px" }}>
          <h1
            style={{ textAlign: "center", color: "navy", fontWeight: "bold" }}
          >
            Bienvenido a tu espacio de trabajo
          </h1>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            {/* Aquí van los componentes o información específica de cada rol */}
            {isAdmin && <PanelAdmin />}
            {isEditor && <PanelEditor />}
            {isResearch && <PanelResearch />}
            {isReader && <PanelReader />}
          </div>
        </div>
      </div>
      <FooterDash />{" "}
      {/* Mueve el Footer aquí para asegurarte de que esté al final */}
    </div>
  );
};

export default DashboardPage;
