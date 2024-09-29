import React from "react";
import Link from "next/link"; // Importa Link para la navegación
import Image from "next/image"; // Importa el componente Image

const WorkBar = () => {
  return (
    <div className="bg-white text-blue h-48 flex flex-col items-center justify-center">
      {/* Logo en el centro */}
      <div className="flex items-center mb-8">
        {" "}
        {/* Aumentamos el margen inferior a mb-8 */}
        <Image
          src="/images/logo_libreria.png" // Asegúrate de que esta ruta sea correcta
          alt="Logo librería GTO"
          width={150} // Tamaño del logo
          height={150} // Tamaño del logo
        />
      </div>

      {/* Enlaces */}
      <div className="flex space-x-8">
        {" "}
        {/* Aumenta el espacio entre los enlaces */}
        <Link href="/framework" className="hover:text-gold font-bold">
          Volver al Dashboard
        </Link>
        <Link href="/logout" className="hover:text-gold font-bold">
          Cerrar Sesión
        </Link>
        <Link href="/" className="hover:text-gold font-bold">
          Inicio
        </Link>
      </div>
    </div>
  );
};

export default WorkBar;
