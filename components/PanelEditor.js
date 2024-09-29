// components/PanelEditor.js
"use client"; // Asegúrate de que este es un Client Component

import React, { useState } from "react";
import { FaSearch, FaFileDownload, FaFileAlt } from "react-icons/fa"; // Importa iconos
import Link from "next/link"; // Importa Link para la navegación

const PanelEditor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contents, setContents] = useState([]); // Aquí puedes cargar los contenidos reales
  const [file, setFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implementa la lógica de búsqueda
  };

  const handleGenerateReport = () => {
    console.log("Generando informe...");
  };

  const handleDownloadFiles = () => {
    console.log("Descargando archivos...");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCoverChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Contenidos</h1>

      {/* Barra de Búsqueda */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Buscar contenidos..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2 flex-grow"
        />
        <button className="ml-2 bg-blue text-white p-2 rounded">
          <FaSearch />
        </button>
      </div>

      {/* Lista de Contenidos */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        {contents.length === 0 ? (
          <p>No hay contenidos disponibles.</p>
        ) : (
          contents.map((content) => (
            <div key={content.id} className="border-b py-2">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </div>
          ))
        )}
      </div>

      {/* Botones para Generar Informe y Descargar Archivos */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleGenerateReport}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Generar Informe <FaFileAlt />
        </button>
        <button
          onClick={handleDownloadFiles}
          className="bg-yellow text-white px-4 py-2 rounded"
        >
          Descargar Archivos <FaFileDownload />
        </button>
      </div>

      {/* Botón para Ver Catálogo Completo */}
      <Link href="/completeCatalog" passHref>
        <button className="bg-gold text-blue px-4 py-2 rounded mb-4">
          Ver Catálogo Completo
        </button>
      </Link>

      {/* Sección para Cargar Portadas y Archivos PDF */}
      <h2 className="text-xl font-bold mb-4">
        Actualizar Catálogo e Inventario
      </h2>

      {/* Cargar Portada */}
      <div className="mb-4">
        <label className="block mb-2">Cargar Portada:</label>
        <input type="file" accept="image/*" onChange={handleCoverChange} />
      </div>

      {/* Cargar Archivo PDF */}
      <div className="mb-4">
        <label className="block mb-2">Cargar Archivo PDF:</label>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>

      {/* Botón para Guardar Cambios */}
      <button className="bg-blue text-white px-4 py-2 rounded">
        Guardar Cambios
      </button>
    </div>
  );
};

export default PanelEditor;
