import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const PanelReader = () => {
  const [books, setBooks] = useState([]);

  // Sección para los libros destacados
  const recentBooks = [];
  const popularBooks = [];
  const favoriteBooks = [];

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Panel del Lector</h1>
      {/* Sección de Libros Recientes */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Libros Recientes</h2>
        {recentBooks.length === 0 ? (
          <p>No hay libros recientes disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentBooks.map((book) => (
              <div key={book.id} className="border p-4 rounded-lg shadow">
                <h3 className="font-semibold">{book.title}</h3>
                <p>
                  <strong>Autor:</strong> {book.author}
                </p>
                <p>
                  <strong>Descripción:</strong> {book.description}
                </p>
                <Link href={`/book/${book.id}`} passHref>
                  <button className="mt-2 bg-yellow text-white px-4 py-2 rounded">
                    Leer en Línea
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Sección de Libros Populares */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Libros Populares</h2>
        {popularBooks.length === 0 ? (
          <p>No hay libros populares disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularBooks.map((book) => (
              <div key={book.id} className="border p-4 rounded-lg shadow">
                <h3 className="font-semibold">{book.title}</h3>
                <p>
                  <strong>Autor:</strong> {book.author}
                </p>
                <p>
                  <strong>Descripción:</strong> {book.description}
                </p>
                <Link href={`/book/${book.id}`} passHref>
                  <button className="mt-2 bg-yellow text-white px-4 py-2 rounded">
                    Leer en Línea
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Sección de Libros Favoritos */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Mis Libros Favoritos</h2>
        {favoriteBooks.length === 0 ? (
          <p>No hay libros favoritos.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favoriteBooks.map((book) => (
              <div key={book.id} className="border p-4 rounded-lg shadow">
                <h3 className="font-semibold">{book.title}</h3>
                <p>
                  <strong>Autor:</strong> {book.author}
                </p>
                <p>
                  <strong>Descripción:</strong> {book.description}
                </p>
                <Link href={`/book/${book.id}`} passHref>
                  <button className="mt-2 bg-yellow text-white px-4 py-2 rounded">
                    Leer en Línea
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Botón para Solicitar Visita Guiada */}
      <Link href="/requestTour" passHref>
        <button className="bg-gold text-white px-4 py-2 rounded mb-4">
          Solicitar Visita Guiada
        </button>
      </Link>
      {/* Botón para Ver Catálogo Completo */}
      <Link href="/completeCatalog" passHref>
        <button className="bg-blue text-white px-4 py-2 rounded mb-4">
          Ver Catálogo Completo
        </button>
      </Link>
    </div>
  );
};

export default PanelReader;
