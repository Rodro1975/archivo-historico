// app/page.js
"use client"; // Esto asegura que este componente puede usar hooks si es necesario

import Head from "next/head"; // Asegúrate de importar Head
import SocialBar from "../components/SocialBar"; // Importa la barra de redes sociales
import NavBar from "../components/NavBar"; // Asegúrate de que la ruta sea correcta
import Image from "next/image"; // Asegúrate de importar Image
import Link from "next/link"; // Asegúrate de importar Link
import { useEffect, useState } from "react"; // Importa useEffect y useState para manejar el estado
import Modal from "../components/Modal"; // Importa el componente Modal
import Footer from "../components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000); // Abre el modal después de 2 segundos

    const handleScroll = () => {
      setIsModalOpen(false); // Cierra el modal si el usuario se desplaza
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Página Principal - Archivo Histórico Librería UG</title>
      </Head>
      {/* Agrega la barra de redes sociales */}
      <SocialBar />
      {/* Hero Section */}
      <section
        className="relative py-48 text-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/guanajuato.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Overlay oscuro para mejorar contraste */}
        {/* Escudo de la Universidad */}
        <Image
          src="/images/escudo-png.png"
          alt="Escudo UG"
          width={256} // Requerido por Next.js
          height={256} // Requerido por Next.js
          className="mx-auto w-64 h-64 mb-6 animate__animated animate__bounce" // Añadir animación al escudo
        />
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-gold text-6xl md:text-8xl font-extrabold leading-tight drop-shadow-lg">
            Archivo Histórico de la Librería UG
          </h1>
          <p
            className={`text-gold mt-4 text-xl md:text-2xl animate__animated animate__bounceInDown`}
          >
            Explora nuestra colección y aprende más sobre la historia de la
            universidad.
          </p>
          <Link
            href="/login"
            className="inline-block bg-yellow text-blue py-4 px-12 rounded-full font-bold hover:bg-blue hover:text-yellow transition duration-300 mt-10 shadow-lg"
          >
            Inicia Sesión
          </Link>
        </div>
      </section>

      {/* Barra de navegación */}
      <NavBar />

      {/* Mostrar modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="featured-collections">
        <h2>Colecciones Destacadas</h2>
        {/* Muestra aquí tus colecciones */}
      </section>

      <section className="news-events">
        <h2>Noticias y Eventos</h2>
        {/* Noticias Recientes */}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
