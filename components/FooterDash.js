// components/FooterDash.js
import Image from "next/image";

const FooterDash = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/Logo_libreria.png" // Reemplaza con la ruta correcta del logo
            alt="Logo de la Librería de la Universidad de Guanajuato"
            width={150}
            height={50}
          />
        </div>

        {/* Línea vertical separadora en pantallas grandes */}
        <div className="hidden md:block border-l border-gray-400 h-10 mx-4"></div>

        {/* Texto a la derecha, centrado en pantallas pequeñas */}
        <div className="text-center md:text-right">
          <p className="mb-1">
            <a href="/politicas-de-privacidad" className="hover:underline">
              Políticas de Privacidad
            </a>{" "}
            |
            <a href="/terminos-de-uso" className="hover:underline">
              Términos de Uso
            </a>{" "}
            |
            <a href="/contribuciones" className="hover:underline">
              Contribuciones
            </a>{" "}
            |
            <a href="/contacto" className="hover:underline">
              Contacto para Soporte Técnico
            </a>
          </p>
          <p className="text-sm">
            © 2024 Archivo Histórico Editorial UG. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDash;
