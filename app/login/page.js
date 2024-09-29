// app/login/page.js
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Usa next/navigation en lugar de next/router
import Head from "next/head";
import Image from "next/image";
import NavBar from "../../components/NavBar";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(""); // Para manejar mensajes de error
  const router = useRouter(); // Para redirigir al usuario

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Respuesta del servidor:", result); // Agrega este log para ver la respuesta

      if (res.ok) {
        // Guarda el token en localStorage o sessionStorage
        localStorage.setItem("token", result.token);
        // Redirige a la página del framework
        router.push("/framework");
      } else {
        // Muestra el error si hay uno
        setError(result.message);
      }
    } catch (error) {
      setError("Error en la conexión con el servidor");
    }
  };

  return (
    <>
      <Head>
        <title>Inicio de Sesión - Archivo Histórico Librería UG</title>
      </Head>
      <NavBar />

      {/* Formulario Inicio de sesión */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-100 flex flex-col sm:py-12 md:w-full md:max-w-3xl rounded-lg shadow-lg">
          <div className="p-10 xs:p-0 mx-auto w-full">
            {/* Escudo y Título dentro del formulario */}
            <div className="px-5 py-7 text-center">
              <div className="flex justify-center mb-5">
                <Image
                  src="/images/escudo-png.png"
                  alt="Escudo"
                  className="h-20"
                  width={80}
                  height={80}
                  priority
                />
              </div>

              <h1 className="font-black text-3xl mb-5 text-gold">
                Iniciar Sesión
              </h1>

              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="on"
              >
                <label
                  htmlFor="email"
                  className="font-semibold text-sm text-blue pb-1 block text-left w-full"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  autoComplete="email" // Agregado para el autocompletado
                  className="border border-yellow rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-blue focus:border-blue focus:ring-gold focus:ring-2 focus:outline-none"
                  required
                />
                <label
                  htmlFor="login-password" // Cambiado para que coincida con el id
                  className="font-semibold text-sm text-blue pb-1 block text-left w-full"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="login-password" // Debe coincidir con el for en el label
                  {...register("password")}
                  autoComplete="current-password" // Agregado para el autocompletado
                  className="border border-yellow rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-blue focus:border-blue focus:ring-gold focus:ring-2 focus:outline-none"
                  required
                />
                {error && <p className="text-red-500">{error}</p>}{" "}
                {/* Mostrar error si existe */}
                <button
                  type="submit"
                  className="transition duration-200 bg-yellow text-blue hover:bg-blue hover:text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Iniciar Sesión</span>
                </button>
              </form>

              <div className="text-center mt-4 text-sm">
                <a href="#" className="text-blue hover:text-gold">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            {/* División o */}
            <div className="text-center py-4">
              <span className="text-blue-900">o</span>
            </div>

            {/* Botones de redes sociales en la misma línea */}
            <div className="p-5 flex justify-between space-x-3">
              <button className="transition duration-200 border border-gray-200 text-gray-900 w-full py-2.5 rounded-lg text-sm hover:bg-gray-100 hover:shadow-lg flex items-center justify-center">
                <i className="fab fa-google mr-2 text-red-600"></i>
                <span className="inline-block">Google</span>
              </button>
              <button className="transition duration-200 border border-gray-200 text-gray-900 w-full py-2.5 rounded-lg text-sm hover:bg-gray-100 hover:shadow-lg flex items-center justify-center">
                <i className="fab fa-linkedin mr-2 text-blue-700"></i>
                <span className="inline-block">LinkedIn</span>
              </button>
            </div>

            {/* Enlace "No tienes cuenta" */}
            <div className="py-5 text-center">
              <span className="text-blue text-sm">¿No tienes una cuenta?</span>
              <a
                href="/register"
                className="text-yellow hover:text-blue text-sm font-semibold ml-2"
              >
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
