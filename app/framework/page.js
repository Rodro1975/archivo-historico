"use client"; // Indica que este archivo usará funcionalidades de cliente

import Head from "next/head";
import Dashboard from "../../components/Dashboard"; // Importa el componente Dashboard

export default function FrameworkPage() {
  return (
    <>
      <Head>
        <title>Framework</title>
      </Head>
      <div className="flex flex-col h-screen">
        {" "}
        {/* Contenedor principal, usa flex para apilar elementos */}
        <header className="bg-blue text-gold p-4">
          {" "}
          {/* Encabezado */}
          <h1 className="text-xl font-bold">Mi Aplicación</h1>
        </header>
        <div
          className="flex flex-grow p-4"
          style={{ margin: "20px", background: "orange" }}
        >
          {" "}
          {/* Área principal con margen */}
          <Dashboard>
            {/* Aquí puedes agregar contenido del dashboard. Por ahora, puedes dejarlo vacío o agregar un placeholder */}
            <div className="flex-grow flex items-center justify-center">
              <p className="text-white">Área de trabajo del Dashboard.</p>
            </div>
          </Dashboard>
        </div>
        <footer className="bg-gray-800 text-white p-4 text-center">
          {" "}
          {/* Pie de página */}
          <p>© 2024 Sistema Integral Web Gestión de Archivo de la UG.</p>
        </footer>
      </div>
    </>
  );
}
