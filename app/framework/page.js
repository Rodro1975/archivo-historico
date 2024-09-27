// app/framework/page.js
"use client";

import Head from "next/head";
import Dashboard from "../../components/Dashboard"; // Importa el componente Dashboard

export default function FrameworkPage() {
  return (
    <>
      <Head>
        <title>Framework</title>
      </Head>
      <div className="flex">
        {/* El Sidebar se incluye dentro del Dashboard */}
        <Dashboard>
          {/* Aquí puedes incluir componentes específicos según el rol */}
          <p>Bienvenido al panel de control del framework.</p>{" "}
          {/* Contenido del dashboard */}
          {/* Puedes agregar más componentes según sea necesario */}
        </Dashboard>
      </div>
    </>
  );
}
