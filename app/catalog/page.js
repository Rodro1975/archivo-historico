// app/catalog/page.js
"use client";

import Head from "next/head";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import "animate.css";
import Footer from "../../components/Footer";

export default function Catalogo() {
  const [libros, setLibros] = useState([]);
  const [pagina, setPagina] = useState(0);
  const librosPorPagina = 6;
  const totalPaginas = Math.ceil(libros.length / librosPorPagina);
  const [isInfoBarVisible, setIsInfoBarVisible] = useState(true); // Estado para controlar la visibilidad de la barra
  const [isAnimatingX, setIsAnimatingX] = useState(false); // Estado para controlar la animación de la x
  const [isAnimatingText, setIsAnimatingText] = useState(false); // Estado para controlar la animación del texto

  useEffect(() => {
    const obtenerLibros = async () => {
      const response = await fetch("/api/libros"); // Endpoint para obtener libros
      const data = await response.json();
      setLibros(data);
    };

    obtenerLibros();
  }, []);

  const librosAmostrar = libros.slice(
    pagina * librosPorPagina,
    (pagina + 1) * librosPorPagina
  );

  const manejarPaginaAnterior = () => {
    if (pagina > 0) setPagina(pagina - 1);
  };

  const manejarPaginaSiguiente = () => {
    if (pagina < totalPaginas - 1) setPagina(pagina + 1);
  };

  const manejarCerrarBarra = () => {
    setIsAnimatingX(true); // Inicia la animación de la x
    setTimeout(() => {
      setIsInfoBarVisible(false); // Oculta la barra después de la animación
      setIsAnimatingX(false); // Resetea el estado de animación
    }, 1000); // Duración de la animación (ajusta según sea necesario)
  };

  return (
    <>
      <Head>
        <title>Catálogo - Archivo Histórico Librería UG</title>
      </Head>
      <NavBar />
      {/* seccion de información */}
      <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4 overflow-visible">
        <div className="grid items-center grid-cols-1 gap-10 px-4 py-6 text-blue bg-gradient-to-r from-yellow to-gray-200 border-pink-100 rounded-none card card-body sm:rounded-lg md:px-10 md:grid-cols-5 lg:gap-0">
          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-3 font-serif text-2xl font-normal leading-tight lg:text-3xl">
              Explora nuestra colección de libros y recursos disponibles.
            </h2>
            <p className="mb-6 text-sm font-semibold lg:text-base">
              Encuentra libros que te inspiren y enriquezcan tu conocimiento.
            </p>
            <a
              href="/login"
              className="w-full text-blue border border-blue bg-transparent hover:bg-blue hover:text-white transition duration-200 shadow-lg py-2 px-4 rounded-lg text-center sm:w-auto"
            >
              Comienza a explorar
            </a>
          </div>
          <div className="col-span-1 md:col-span-2 md:flex md:justify-center">
            {/* Asegúrate de que el contenedor ocupe todo el ancho disponible */}
            <div className="relative w-full h-auto">
              <Image
                src="/images/libreriaUg.png"
                alt="Libros"
                className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Barra de información */}
      {isInfoBarVisible && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-blue to-gray-800 px-6 py-4 sm:px-3.5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="text-sm leading-6 text-white flex items-center">
              <span
                className={`font-bold text-yellow ${
                  isAnimatingText ? "animate__animated animate__heartBeat" : ""
                }`}
                onMouseEnter={() => {
                  setIsAnimatingText(true);
                  console.log("Mouse enter: animación activa");
                }}
                onMouseLeave={() => {
                  setIsAnimatingText(false);
                  console.log("Mouse leave: animación detenida");
                }}
              >
                PONTE ABEJA
              </span>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              ¡Únete al Archivo Histórico de la UG y descubre un fascinante
              viaje a través del tiempo!
            </div>
            <a
              href="/register"
              className="flex-none rounded inline-block bg-gray-900 px-3.5 py-1 text-sm font-medium text-gold shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Regístrate ahora <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className={`-m-3 p-3 focus-visible:outline-offset-[-4px] transition-transform duration-500 ease-in-out ${
                isAnimatingX ? "animate__animated animate__rotateOut" : ""
              } hover:scale-110 hover:text-gray-700`}
              onClick={manejarCerrarBarra}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586L15.293 3.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 0 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707A1 1 0 1 1 4.707 3.293L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Catalogo */}
      <div className="catalogo-container">
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {librosAmostrar.map((libro, index) => (
              <div
                key={index}
                className={`bg-${
                  index % 2 === 0 ? "gold" : "gray"
                }-200 p-4 rounded`}
              >
                <a href="#">
                  <Image
                    src="/images/escudo-png.png"
                    alt="Escudo"
                    className="h-20"
                    width={80}
                    height={80}
                    priority
                  />
                </a>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  <a href="#" className="text-gray-900 hover:text-purple-700">
                    {libro.titulo}
                  </a>
                </h2>
                <p className="mb-3 text-sm font-normal text-gray-500">
                  {libro.contraPortada} {/* Breve descripción */}
                </p>

                <p className="mb-3 text-sm font-normal text-gray-500">
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:text-purple-700"
                  >
                    {libro.autor}
                  </a>
                  {libro.fecha_registro} {/* Fecha de publicación */}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <button
              onClick={manejarPaginaAnterior}
              className="w-full rounded-full bg-yellow text-blue px-6 py-3 md:w-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              disabled={pagina === 0}
            >
              Página Anterior
            </button>
            <button
              onClick={manejarPaginaSiguiente}
              className="w-full rounded-full bg-yellow text-blue px-6 py-3 md:w-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              disabled={pagina === totalPaginas - 1}
            >
              Página Siguiente
            </button>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
