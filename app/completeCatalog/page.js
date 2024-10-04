"use client"; // Asegúrate de que este es un Client Component

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importa iconos
import Image from "next/image"; // Importa el componente Image
import WorkBar from "../../components/WorkBar";
import SocialBar from "../../components/SocialBar";
import Footer from "../../components/Footer";

const CatalogoCompleto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]); // Aquí puedes cargar los libros reales

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implementa la lógica de búsqueda
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Barra social */}
      <SocialBar />
      {/* Barra de trabajo */}
      <div className="sticky top-0 z-50">
        <WorkBar />
      </div>
      {/* Hero Section */}
      <div
        className="relative flex flex-col md:flex-row-reverse items-center mb-8 bg-gradient-to-t to-gray-300 h-full"
        style={{
          background: "linear-gradient(to top, #c56a25, #e2e8f0)", // #fb923c es un tono de naranja hacia el café
        }}
      >
        {/* Texto en el lado izquierdo */}
        <div className="absolute inset-0 flex items-center justify-start text-gold text-left z-10 px-8 md:px-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight drop-shadow-lg">
              Archivo Histórico
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 drop-shadow-md">
              Explora nuestra colección de libros.
            </p>
          </div>
        </div>

        {/* Imagen del lado derecho */}
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
          <Image
            src="/images/libroUg.jpg"
            alt="Libro Neon"
            layout="responsive" // Asegúrate de que la imagen sea responsiva
            width={500} // Ajusta según sea necesario
            height={400} // Ajusta según sea necesario
            className="object-cover shadow-lg h-full" // Asegúrate de que cubra el contenedor
          />
        </div>
      </div>

      {/* Barra de Búsqueda */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Buscar libros..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2 flex-grow bg-gradient-to-r from-gold to-white placeholder-blue"
        />
        <button className="ml-2 w-12 h-12 bg-yellow text-blue flex items-center justify-center transform rotate-30 clip-hexagon">
          <div className="w-full h-full flex items-center justify-center -rotate-30">
            <FaSearch className="text-blue" />
          </div>
        </button>

        <style jsx>{`
          .clip-hexagon {
            clip-path: polygon(
              50% 0%,
              100% 25%,
              100% 75%,
              50% 100%,
              0% 75%,
              0% 25%
            );
          }
        `}</style>
      </div>

      {/* Mosaico de Libros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {books.length === 0 ? (
          <p>No hay libros disponibles.</p>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={book.coverImage}
                alt={book.title}
                layout="responsive" // Asegúrate de que la imagen sea responsiva
                width={300} // Ajusta el ancho según sea necesario
                height={400} // Ajusta la altura según sea necesario
                className="object-cover h-48" // Mantiene la imagen adaptada al contenedor
              />
              <div className="p-4">
                <h3 className="font-semibold">{book.title}</h3>
                <p>
                  <strong>Autor:</strong> {book.author}
                </p>
                <p>
                  <strong>Descripción:</strong> {book.description}
                </p>
                {/* Botón para ver más detalles */}
                <button
                  onClick={
                    () => console.log(`Ver detalles del libro: ${book.id}`) // Cambia esto por la lógica real
                  }
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CatalogoCompleto;
