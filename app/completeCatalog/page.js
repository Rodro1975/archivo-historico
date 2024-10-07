"use client"; // Asegúrate de que este es un Client Component

import React, { useEffect, useState } from "react"; // Importa useEffect
import { FaSearch } from "react-icons/fa"; // Importa iconos
import Image from "next/image"; // Importa el componente Image
import WorkBar from "../../components/WorkBar";
import SocialBar from "../../components/SocialBar";
import Footer from "../../components/Footer";

const CatalogoCompleto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // Estado para el libro seleccionado

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/catalogoCompleto");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error al cargar los libros:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <SocialBar />
      <div className="sticky top-0 z-50">
        <WorkBar />
      </div>

      <div
        className="relative flex flex-col items-center justify-center mb-8 h-screen"
        style={{
          backgroundImage: "url('/images/biblioteca.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-red-700 via-transparent to-[#D2B48C] z-0"
          style={{ opacity: 0.85 }}
        ></div>

        <div
          className="flex flex-col items-center justify-center text-gold text-center z-10 px-8 md:px-16 lg:w-3/4"
          style={{ marginTop: "-250px" }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight drop-shadow-xl">
            Archivo Histórico
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-red-300 drop-shadow-lg">
            Explora nuestra colección de libros.
          </p>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-center">
        <div className="w-full max-w-md flex items-center">
          <input
            type="text"
            placeholder="Buscar libros..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-l p-2 flex-grow bg-gradient-to-r from-[#FFD700] to-[#FFFFFF] placeholder-[#1E3A8A]"
          />
          <button className="ml-2 w-12 h-12 bg-[#FFC107] text-[#1E3A8A] flex items-center justify-center transform rotate-30 clip-hexagon">
            <div className="w-full h-full flex items-center justify-center -rotate-30">
              <FaSearch className="text-[#1E3A8A]" />
            </div>
          </button>
        </div>
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
                layout="responsive"
                width={300}
                height={400}
                className="object-cover h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold">{book.title}</h3>
                <p>
                  <strong>Descripción:</strong> {book.description}
                </p>
                <button
                  onClick={() => setSelectedBook(book)}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-blue">
            <h2 className="text-2xl font-bold mb-4">{selectedBook.title}</h2>
            <p>
              <strong>ISBN:</strong> {selectedBook.isbn}
            </p>
            <p>
              <strong>Descripción:</strong> {selectedBook.description}
            </p>
            <button
              onClick={() => setSelectedBook(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CatalogoCompleto;
