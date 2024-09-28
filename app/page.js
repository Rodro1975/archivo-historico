// app/page.js
"use client"; // Esto asegura que este componente puede usar hooks si es necesario

import Head from "next/head"; // Asegúrate de importar Head
import SocialBar from "../components/SocialBar"; // Importa la barra de redes sociales
import NavBar from "../components/NavBar"; // Asegúrate de que la ruta sea correcta
import Image from "next/image"; // Asegúrate de importar Image
import Link from "next/link"; // Asegúrate de importar Link
import "animate.css";

export default function Home() {
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
          width={128} // Requerido por Next.js
          height={128} // Requerido por Next.js
          className="mx-auto w-32 h-32 mb-6 animate__animated animate__bounce" // Añadir animación al escudo
        />
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-gold text-5xl font-extrabold leading-tight shadow-lg">
            Bienvenido al Archivo Histórico de la Librería UG
          </h1>
          <p
            className={`text-gold mt-4 text-lg animate__animated animate__bounceInDown`}
          >
            Explora nuestra colección y aprende más sobre la historia de la
            universidad.
          </p>
          <Link
            href="/login"
            className="inline-block bg-yellow text-blue py-3 px-8 rounded-full font-bold hover:bg-gold hover:text-white transition duration-300 mt-10 shadow-lg"
          >
            Inicia Sesión
          </Link>
        </div>
      </section>

      {/* Barra de navegacion */}
      <NavBar />

      <section className="featured-collections">
        <h2>Colecciones Destacadas</h2>
        {/*  Muestra aquí tus colecciones */}
      </section>

      <section className="news-events">
        <h2>Noticias y Eventos</h2>
        {/*  Noticias Recientes */}
      </section>

      <footer className="footer">
        <p>
          &copy; 2024 Archivo Histórico de la UG | Todos los derechos
          reservados.
        </p>
        {/*  Información adicional */}
      </footer>
    </>
  );
}
