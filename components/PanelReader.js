"use client"; // Asegúrate de que este es un Client Component

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importa iconos

const PanelReader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]); // Aquí puedes cargar los libros reales

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implementa la lógica de búsqueda
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Lectura de Libros</h1>

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
              <button
                onClick={() =>
                  console.log(`Accediendo al contenido del libro: ${book.id}`)
                }
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
              >
                Leer en Línea
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PanelReader;
