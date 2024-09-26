// app/page.js
"use client"; // Esto asegura que este componente puede usar hooks si es necesario

import Head from "next/head"; // Asegúrate de importar Head
import NavBar from "../components/NavBar"; // Asegúrate de que la ruta sea correcta
import Image from "next/image"; // Asegúrate de importar Image
import Link from "next/link"; // Asegúrate de importar Link

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal - Archivo Histórico Librería UG</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative py-48 text-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/guanajuato.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-35"></div>

        {/* Escudo de la Universidad */}
        <Image
          src="/images/escudo-png.png"
          alt="Escudo UG"
          width={128} // Requerido por Next.js
          height={128} // Requerido por Next.js
          className="mx-auto w-32 h-32 mb-6" // Tailwind CSS para ajuste visual
        />

        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-gold text-4xl font-bold">
            Bienvenido al Archivo Histórico de la Librería UG
          </h1>
          <p className="text-gold mt-4">
            Explora nuestra colección y aprende más sobre la historia de la
            universidad.
          </p>
          <Link
            href="/login"
            className="bg-yellow-500 text-black py-2 px-12 rounded inline-block font-bold hover:bg-yellow-400 transition duration-300 mt-10"
          >
            Inicia Sesión
          </Link>
        </div>
      </section>

      {/* Barra de navegacion */}
      <NavBar />
    </>
  );
}
