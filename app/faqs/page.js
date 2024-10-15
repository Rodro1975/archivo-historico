import React from "react";
import Footer from "../../components/Footer";

const FAQs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Información General</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Qué es el Archivo Histórico de la Universidad de Guanajuato?
            </h3>
            <p>
              El Archivo Histórico de la Universidad de Guanajuato es una
              colección de documentos y registros importantes que preservan la
              historia académica y administrativa de la institución.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Qué tipos de documentos se encuentran en el archivo?
            </h3>
            <p>
              El archivo contiene documentos históricos, fotos, mapas, registros
              académicos antiguos, y otros materiales relacionados con la
              historia de la Librería de la universidad.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Acceso y Uso del Archivo
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Cómo puedo acceder al archivo histórico?
            </h3>
            <p>
              El archivo es accesible tanto en línea como en forma física. Para
              acceder a la versión digital, puede visitar nuestra plataforma en
              línea, mientras que para consultas físicas se requiere programar
              una visita.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Es necesario registrarse para consultar los documentos?
            </h3>
            <p>
              Para consultas en línea, es necesario registrarse en el sistema de
              la universidad. Las visitas físicas pueden requerir una
              autorización previa.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Políticas de Uso</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Se pueden descargar los documentos del archivo?
            </h3>
            <p>
              Algunos documentos están disponibles para descarga en formato
              digital, pero otros solo pueden consultarse en línea debido a
              restricciones de conservación.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Puedo solicitar una copia física de algún documento?
            </h3>
            <p>
              Es posible solicitar copias físicas de ciertos documentos
              siguiendo los lineamientos establecidos por el archivo. Se debe
              presentar una solicitud formal.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Colaboración y Donaciones
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Puedo donar documentos históricos al archivo?
            </h3>
            <p>
              Sí, el archivo acepta donaciones de documentos históricos que
              contribuyan a la preservación del patrimonio de la universidad.
              Para más detalles, por favor contacta a la administración del
              archivo.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Cómo puedo colaborar en la digitalización o preservación de
              documentos?
            </h3>
            <p>
              Existen programas para colaborar en la preservación de documentos
              históricos. Los interesados pueden postularse para ser voluntarios
              o colaboradores en los proyectos de digitalización.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Consultas y Asistencia</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿A quién puedo contactar si tengo preguntas específicas sobre un
              documento?
            </h3>
            <p>
              Puedes contactar al equipo del archivo a través del correo
              electrónico{" "}
              <a
                href="mailto:archivo@ugto.mx"
                className="text-yellow font-bold"
              >
                archivo@ugto.mx
              </a>{" "}
              o al número telefónico (473) 732 0006.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ¿Qué debo hacer si no encuentro el documento que estoy buscando?
            </h3>
            <p>
              Si no encuentras el documento que estás buscando, puedes enviar
              una solicitud de asistencia al equipo del archivo, quienes te
              guiarán en la búsqueda o en la solicitud de un documento
              específico.
            </p>
          </div>
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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default FAQs;
