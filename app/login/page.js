// app/login/page.js
"use client";

import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar";

export default function Login() {
  const { register, handleSubmit } = useForm(); // Registrar los métodos de react-hook-form

  const onSubmit = async (data) => {
    console.log(data); // Aquí puedes manejar el inicio de sesión
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

              <h1 className="font-black text-3xl mb-5 text-yellow-400">
                Iniciar Sesión
              </h1>

              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)} // Añade el manejador de envío aquí
                autoComplete="on"
              >
                <label
                  htmlFor="email"
                  className="font-semibold text-sm text-blue-900 pb-1 block text-left w-full"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")} // Registra el input con react-hook-form
                  className="border border-blue-900 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="font-semibold text-sm text-blue-900 pb-1 block text-left w-full"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="login-password"
                  {...register("password")} // Registra el input con react-hook-form
                  className="border border-blue-900 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="transition duration-200 bg-yellow-400 hover:bg-blue-900 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Iniciar Sesión</span>
                </button>
              </form>

              <div className="text-center mt-4 text-sm">
                <a href="#" className="text-blue-900 hover:text-gray-600">
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
              <span className="text-blue-900 text-sm">
                ¿No tienes una cuenta?
              </span>
              <a
                href="/register"
                className="text-yellow-400 hover:text-blue-900 text-sm font-semibold"
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
