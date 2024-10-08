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
    <div className="flex flex-col min-h-screen w-full">
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

      <section className="news-events">
        <h2>Noticias y Eventos</h2>
        {/* Noticias Recientes */}
      </section>

      <section className="collections-highlighted py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Colecciones Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="collection-card bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/images/libroUg.jpg" // Ruta de la imagen
              alt="Título de la Colección"
              width={500} // Ajusta según sea necesario
              height={300} // Ajusta según sea necesario
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl text-gray-300 font-semibold mt-2">
              Colección: Historia Local
            </h3>
            <p className="text-gray-600">
              Breve descripción sobre la colección destacada.
            </p>
            <button className="mt-4 bg-blue text-white py-2 px-4 rounded-full">
              Explorar
            </button>
          </div>
          <div className="collection-card bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/images/libroUg.jpg" // Ruta de la imagen
              alt="Título de la Colección"
              width={500} // Ajusta según sea necesario
              height={300} // Ajusta según sea necesario
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl text-gray-300 font-semibold mt-2">
              Colección: Cultura y Tradiciones
            </h3>
            <p className="text-gray-600">
              Breve descripción sobre la colección destacada.
            </p>
            <button className="mt-4 bg-blue text-white py-2 px-4 rounded-full">
              Explorar
            </button>
          </div>
          <div className="collection-card bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/images/libroUg.jpg" // Ruta de la imagen
              alt="Título de la Colección"
              width={500} // Ajusta según sea necesario
              height={300} // Ajusta según sea necesario
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl text-gray-300 font-semibold mt-2">
              Colección: Arte y Literatura
            </h3>
            <p className="text-gray-600">
              Breve descripción sobre la colección destacada.
            </p>
            <button className="mt-4 bg-blue text-white py-2 px-4 rounded-full">
              Explorar
            </button>
          </div>
          <div className="collection-card bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/images/libroUg.jpg" // Ruta de la imagen
              alt="Título de la Colección"
              width={500} // Ajusta según sea necesario
              height={300} // Ajusta según sea necesario
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl text-gray-300 font-semibold mt-2">
              Colección: Ciencia y Tecnología
            </h3>
            <p className="text-gray-600">
              Breve descripción sobre la colección destacada.
            </p>
            <button className="mt-4 bg-blue text-white py-2 px-4 rounded-full">
              Explorar
            </button>
          </div>
          {/* Repetir para otras colecciones */}
        </div>
      </section>

      <section className="collections-highlighted py-8">
        {/* ... (código anterior para colecciones destacadas) ... */}
      </section>

      <section className="featured-month py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Colección Destacada del Mes
        </h2>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/images/libroUg.jpg"
            alt="Colección Destacada"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-2">
            Este mes, exploramos la colección sobre [Tema de la Colección]. Esta
            colección incluye documentos, fotografías y testimonios que destacan
            su importancia histórica.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            Una cita inspiradora o un testimonio relevante sobre la colección.
          </blockquote>
        </div>
      </section>

      <section className="personal-stories py-8 bg-gray-100">
        <h2 className="text-3xl text-blue font-bold text-center mb-6">
          Historias Detrás de las Colecciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="story-card bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/images/juanperez.png"
              alt="Historia Personal"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-2">
              Título de la Historia
            </h3>
            <p className="text-gray-600">
              Breve descripción sobre la historia personal relacionada con la
              colección.
            </p>
          </div>
          {/* Repetir para otras historias */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
