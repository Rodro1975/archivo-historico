import React from "react";
import Footer from "../../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Aviso de Privacidad Integral
        </h1>
        <p>
          Con fundamento en lo dispuesto en los artículos 3, fracción I, 34, 36,
          3, 39, 40 y 42 de la Ley de Protección de Datos Personales en Posesión
          de Sujetos Obligados para el Estado de Guanajuato, publicada en el
          Periódico Oficial del Gobierno del Estado de Guanajuato el 14 de julio
          de 2017, se hace de su conocimiento lo siguiente:
        </p>
        <h2 className="text-xl font-semibold mt-4">Responsable</h2>
        <p>
          La Universidad de Guanajuato (órgano autónomo, con personalidad
          jurídica y patrimonio propio de conformidad a lo dispuesto por el
          decreto emitido por el H. Congreso del Estado de Guanajuato en fecha
          11 de mayo de 1994; cuyos fines son educar, investigar y difundir la
          cultura, determinar sus planes y programas; así como fijar los
          términos de ingreso, promoción y permanencia de su personal y
          administrar su patrimonio) a través del Programa Editorial
          Universitario, es responsable del tratamiento de los datos personales
          que en este documento se indican, obtenidos en virtud de las
          atribuciones expresas que la normatividad aplicable le confiere.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Domicilio del Responsable
        </h2>
        <p>
          La Universidad de Guanajuato tiene su domicilio en Lascurain de Retana
          5, Colonia Centro, C.P. 36000 en Guanajuato, Gto
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Datos personales sometidos a tratamiento
        </h2>
        <p>
          Los datos personales sometidos a tratamiento por parte del Programa
          Editorial Universitario, son:
        </p>
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico personal</li>
          <li>Correo electrónico institucional</li>
          <li>NUE (Número único de empleado)</li>
          <li>NUA (Número único de alumno)</li>
          <li>Número de celular / Teléfono de contacto</li>
          <li>Domicilio</li>
          <li>Estado</li>
        </ul>
        <p>
          El Programa Editorial Universitario no lleva a cabo el tratamiento de
          datos personales sensibles.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Finalidad del tratamiento
        </h2>
        <p>
          El Programa Editorial Universitario trata los datos personales en su
          posesión conforme a la siguiente finalidad:
        </p>
        <p>
          Facilitar la interacción de la Universidad de Guanajuato y sus
          productos académicos con la sociedad en general, potenciando su
          función social con el impulso de acciones de promoción y difusión de
          los productos editoriales generados por esta Casa de estudios y que
          impacten positivamente en la comunidad, a través de actividades de
          venta de libros impresos y digitales.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Fundamento legal que faculta expresamente al responsable para llevar a
          cabo el tratamiento de datos personales
        </h2>
        <p>
          El Programa Editorial Universitario se encuentra facultado para llevar
          a cabo el tratamiento de los datos personales en su posesión, de
          conformidad con lo dispuesto en los artículos 21, fracción XV, de la
          Ley Orgánica de la Universidad de Guanajuato; 83, fracción IX del
          Estatuto Orgánico de la Universidad de Guanajuato (IX. Llevar el
          registro de la producción académica de su entidad;); 97, fracción V y
          98 del Reglamento Académico de la Universidad de Guanajuato (labor
          editorial).
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Mecanismos y medios disponibles para que el Titular de los datos
          personales pueda manifestar su negativa para el tratamiento de sus
          datos personales
        </h2>
        <p>
          El titular de los datos personales podrá, en todo momento, manifestar
          su negativa para el tratamiento de su información personal.
        </p>
        <p>
          Para ello, se hace de su conocimiento que la solicitud se debe enviar
          a la Unidad de Transparencia, pudiendo en su caso utilizar el Anexo 5
          del Programa Anual de Protección de Datos Personales (Modelo negativa
          para el tratamiento de datos personales), disponible en: CLICK AQUÍ.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Mecanismos, medios y procedimientos disponibles para ejercer los
          derechos ARCO y domicilio de la Unidad de Transparencia
        </h2>
        <p>
          La Unidad de Transparencia de la Universidad de Guanajuato es la
          unidad administrativa responsable del sistema de datos personales; y
          el lugar en donde el interesado podrá ejercer sus derechos de acceso,
          rectificación, cancelación y oposición al tratamiento de datos
          personales (ARCO); se encuentra ubicada en Paseo Madero 32, Zona
          Centro, C.P. 36000. Guanajuato, Gto. con el teléfono (473) 688 0436,
          en un horario de lunes a viernes de 08:00 a 16:00 horas, o bien a
          través del correo electrónico: transparencia@ugto.mx.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Sitio de consulta para el aviso de privacidad integral
        </h2>
        <p>
          El presente aviso de privacidad puede ser consultado en la página
          institucional: CLICK AQUÍ y en CLICK AQUÍ.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Los medios a través de los cuales el responsable comunicará a los
          titulares el aviso de privacidad
        </h2>
        <p>
          Se comunicarán por correo electrónico, cuando así lo haya
          proporcionado el titular de los datos personales, o a través de la
          página institucional en Internet: privacidad y en CLICK AQUÍ
          privacidad y en CLICK AQUÍ.
        </p>
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

export default PrivacyPolicy;
