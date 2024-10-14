import React from "react";

const Contribuciones = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Contribuciones y Agradecimientos
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Imágenes</h2>
          <p>
            Agradecemos a los siguientes autores y plataformas por las imágenes
            utilizadas en este proyecto:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Fotos descargadas de{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Unsplash
              </a>
            </li>
            <li>
              Imágenes de íconos proporcionadas por{" "}
              <a
                href="https://www.flaticon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Flaticon
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Íconos</h2>
          <p>
            Los íconos utilizados en esta web provienen de las siguientes
            fuentes:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Íconos de{" "}
              <a
                href="https://fontawesome.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                FontAwesome
              </a>
            </li>
            <li>
              Íconos de{" "}
              <a
                href="https://material.io/resources/icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Material Icons
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Bibliotecas y Herramientas
          </h2>
          <p>
            Este proyecto ha sido desarrollado utilizando las siguientes
            bibliotecas y herramientas:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Next.js
              </a>{" "}
              - Framework utilizado para el desarrollo de la aplicación web.
            </li>
            <li>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Tailwind CSS
              </a>{" "}
              - Utilizado para el diseño y la implementación del estilo.
            </li>
            <li>
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Bootstrap
              </a>{" "}
              - Biblioteca de componentes para el frontend.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Licencias</h2>
          <p>
            Los recursos utilizados en este proyecto están sujetos a las
            siguientes licencias:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Imágenes y gráficos bajo la licencia de{" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow font-bold"
              >
                Creative Commons Attribution 4.0
              </a>
              .
            </li>
            <li>
              Íconos y bibliotecas están bajo las licencias especificadas por
              los proveedores correspondientes.
            </li>
          </ul>
        </div>

        <p className="mt-6">
          <a
            href="/"
            className="font-bold text-yellow hover:text-gold transition duration-300"
          >
            Regresar al inicio
          </a>
        </p>
      </div>
    </>
  );
};

export default Contribuciones;
