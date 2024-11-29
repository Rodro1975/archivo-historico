"use client";

import React, { useEffect, useState } from "react";
import PanelAdmin from "../../components/PanelAdmin";
import PanelEditor from "../../components/PanelEditor";
import PanelResearch from "../../components/PanelResearch";
import PanelReader from "../../components/PanelReader";
import Header from "../../components/header/Header";
import Sidebar from "../../components/SideBar";
import FooterDash from "../../components/FooterDash";

const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Extrae el token del almacenamiento local
    const storedToken = localStorage.getItem("supabase.auth.token");
    let accessToken = null;

    if (storedToken) {
      try {
        const parsedToken = JSON.parse(storedToken); // Parsea el objeto almacenado
        accessToken = parsedToken?.currentSession?.access_token;
      } catch (error) {
        console.error("Error al parsear el token almacenado:", error);
      }
    }

    if (accessToken) {
      // Verifica el token usando tu API
      fetch("/api/check-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: accessToken }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.role) {
            setRole(data.role); // Asigna el rol al estado
          } else {
            console.error("Sesión inválida o sin rol definido.");
          }
        })
        .catch((err) => {
          console.error("Error al verificar el token:", err);
        });
    } else {
      console.error("No se encontró un token válido.");
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
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px", marginTop: "60px" }}>
          <h1
            style={{ textAlign: "center", color: "navy", fontWeight: "bold" }}
          >
            Bienvenido a tu espacio de trabajo
          </h1>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            {/* Mostrar panel según el rol */}
            {role === "Administrador" && <PanelAdmin />}
            {role === "Editor" && <PanelEditor />}
            {role === "Lector" && <PanelReader />}
          </div>
        </div>
      </div>
      <FooterDash />
    </div>
  );
};

export default Dashboard;
