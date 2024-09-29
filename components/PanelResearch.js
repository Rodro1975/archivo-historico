"use client"; // Asegúrate de que este es un Client Component

import React, { useState } from "react";
import { FaSearch, FaFileDownload } from "react-icons/fa"; // Importa iconos

const PanelResearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]); // Aquí puedes cargar los libros reales

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implementa la lógica de búsqueda
  };

  const handleRequestDownload = (bookId) => {
    // Lógica para solicitar permisos de descarga
    console.log(
      `Solicitando permiso para descargar el libro con ID: ${bookId}`
    );
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Consulta de Libros</h1>

      {/* Barra de Búsqueda */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Buscar libros..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2 flex-grow"
        />
        <button className="ml-2 bg-blue-500 text-white p-2 rounded">
          <FaSearch />
        </button>
      </div>

      {/* Lista de Libros */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        {books.length === 0 ? (
          <p>No hay libros disponibles.</p>
        ) : (
          books.map((book) => (
            <div key={book.id} className="border-b py-2">
              <h3 className="font-semibold">{book.title}</h3>
              <p>
                <strong>Autor:</strong> {book.author}
              </p>
              <p>
                <strong>Descripción:</strong> {book.description}
              </p>
              <p>
                <strong>Año de Publicación:</strong> {book.year}
              </p>
              <button
                onClick={() => handleRequestDownload(book.id)}
                className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
              >
                Solicitar Descarga <FaFileDownload className="ml-1" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PanelResearch;
