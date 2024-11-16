//app/aboutUs
"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <main className="text-orange min-h-screen">
      <NavBar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-gold text-4xl sm:text-5xl font-bold mb-4">
            Acerca de Nosotros
          </h1>
          <p className=" text-gold text-lg sm:text-xl max-w-3xl mx-auto">
            Descubre la historia, misión y visión del Archivo Histórico de la
            Librería de la UG. Preservando el pasado para enriquecer el futuro.
          </p>
        </div>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/libreriaUg.jpg" // Cambia la imagen según tu necesidad
            alt="Archivo Histórico"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-white leading-7 text-lg">
              Salvaguardar y preservar documentos históricos de valor
              inestimable para las generaciones presentes y futuras. Promover el
              acceso a la información histórica, fomentando la investigación y
              la educación.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-white leading-7 text-lg">
              Ser un referente en la conservación y digitalización de archivos
              históricos, utilizando tecnologías de vanguardia para garantizar
              la accesibilidad y perpetuidad de nuestro patrimonio cultural.
            </p>
          </div>
        </div>
      </section>

      {/* Team or Highlights Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-gray-800 text-3xl font-bold text-center mb-10">
            Conoce a Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/juanperez.png" // Imagen del equipo o destacado
                alt="Miembro del Equipo"
                width={256}
                height={256}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Elba Margarita Sánchez Rolón
                </h3>
                <p className="text-gray-600">Director del Archivo</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/juanperez.png" // Imagen del equipo o destacado
                alt="Miembro del Equipo"
                width={256}
                height={256}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">María López</h3>
                <p className="text-gray-600">Especialista en Digitalización</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/juanperez.png" // Imagen del equipo o destacado
                alt="Miembro del Equipo"
                width={256}
                height={256}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Carlos Ruiz</h3>
                <p className="text-gray-600">Historiador Investigador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-blue-800 text-white text-center">
        <h2 className="text-gold text-3xl font-bold mb-4">
          ¡Sé parte de nuestra misión!
        </h2>
        <p className="text-gold text-lg max-w-2xl mx-auto">
          Descubre, explora y participa en la preservación de nuestra historia.
          Únete a nosotros para construir un futuro más informado y conectado
          con el pasado.
        </p>
        <a
          href="/contact" // Cambia a la ruta adecuada
          className="mt-6 inline-block bg-yellow text-blue font-bold py-2 px-6 rounded-full shadow-md hover:bg-orange hover:text-gold transition"
        >
          Contáctanos
        </a>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUsPage;
