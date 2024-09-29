import React, { useState } from "react";
import SideBar from "./SideBar"; // Importar el componente SideBar
import PanelAdmin from "../components/PanelAdmin";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Comenzar con la barra lateral cerrada

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Contenido principal */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          marginRight: isSidebarOpen ? "250px" : "0", // Ajustar espacio según la barra lateral
          transition: "margin-right 0.3s ease",
          background: "lightgray", // Fondo para el área de trabajo
        }}
      >
        {children}

        {/* Aqui se integran los componentes */}
        <PanelAdmin />
      </main>

      {/* Botón para alternar la barra lateral */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        {isSidebarOpen ? "Cerrar Menú" : "Abrir Menú"}
      </button>

      {/* Barra lateral */}
      <SideBar isOpen={isSidebarOpen} />
    </div>
  );
};

export default DashboardLayout;
