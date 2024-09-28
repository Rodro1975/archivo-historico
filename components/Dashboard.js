// components/Dashboard.js
import React from "react";
import SideBar from "../components/SideBar"; // Asegúrate de importar el Sidebar

const Dashboard = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar /> {/* Incluye el Sidebar aquí */}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <header
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-blue)",
            padding: "16px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Dashboard</h1>
        </header>
        <main style={{ padding: "16px" }}>
          {children} {/* Aquí se renderizarán los componentes hijos */}
        </main>
        <footer
          style={{
            backgroundColor: "var(--color-blue)",
            color: "white",
            padding: "16px",
            textAlign: "center",
            borderTop: "2px solid var(--color-gold)",
          }}
        >
          <p style={{ fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} Archivo Histórico de la Librería
            UG
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
