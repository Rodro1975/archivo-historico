// components/Dashboard.js
import React, { useEffect, useState } from "react";
import PanelAdmin from "../components/PanelAdmin";
import PanelEditor from "../components/PanelEditor"; // Importar el PanelEditor
import PanelResearch from "../components/PanelResearch";
import PanelReader from "../components/PanelReader";
import { decode } from "jsonwebtoken"; // Asegúrate de que está correctamente importado

const DashboardLayout = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditor, setIsEditor] = useState(false); // Estado para verificar si es editor
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
          setIsEditor(false); // No mostrar panel de editor si es admin
          setIsResearch(false);
          setIsReader(false);
        } else if (decoded.rol === "Editor") {
          setIsEditor(true);
          setIsAdmin(false); // No mostrar panel de admin si es editor
          setIsResearch(false);
          setIsReader(false);
        } else if (decoded.rol === "Investigador") {
          setIsResearch(true);
          setIsAdmin(false); // No mostrar panel de admin si es editor
          setIsEditor(false);
          setIsReader(false);
        } else if (decoded.rol === "Lector") {
          setIsReader(true);
          setIsAdmin(false);
          setIsEditor(false);
          setIsResearch(false);
        } else {
          setIsAdmin(false);
          setIsEditor(false);
          setIsResearch(false);
          setIsReader(false);
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        setIsAdmin(false);
        setIsEditor(false);
        setIsResearch(false);
        setIsReader(false);
      }
    }
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <main
        style={{
          flex: 1,
          padding: "20px",
          background: "lightgray",
        }}
      >
        {children}

        {/* Mostrar PanelAdmin si el usuario es administrador */}
        {isAdmin && <PanelAdmin />}
        {/* Mostrar PanelEditor si el usuario es editor */}
        {isEditor && <PanelEditor />}
        {/* Mostrar PanelResearch si el usuario es investigador */}
        {isResearch && <PanelResearch />}
        {/* Mostrar PanelReader si el usuario es lector */}
        {isReader && <PanelReader />}
      </main>
    </div>
  );
};

export default DashboardLayout;
