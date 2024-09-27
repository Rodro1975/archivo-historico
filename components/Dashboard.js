// components/Dashboard.js
import React from "react";
import SideBar from "../components/SideBar"; // Asegúrate de importar el Sidebar

const Dashboard = ({ children }) => {
  return (
    <div className="flex">
      <SideBar /> {/* Incluye el Sidebar aquí */}
      <div className="flex-grow bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>
        <main className="p-4">
          {children} {/* Aquí se renderizarán los componentes hijos */}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Archivo Histórico de la Librería UG
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
