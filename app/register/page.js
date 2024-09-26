// app/register/page.js
"use client";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Datos enviados:", data);
    if (data.password !== data.confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }

    try {
      const { confirmPassword, ...userData } = data; // Eliminar confirmPassword antes de enviar
      const response = await axios.post("/api/register", userData);
      console.log(response.data.message);
    } catch (error) {
      console.error(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  const roles = ["Lector", "Administrador", "Editor", "Investigador"];

  return (
    <>
      <Head>
        <title>Registro - Archivo Histórico Librería UG</title>
      </Head>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen pt-16 pb-16">
        {" "}
        {/* formulario de registro */}
        <div className="bg-gray-100 flex flex-col sm:py-12 md:w-full md:max-w-4xl rounded-lg shadow-lg">
          <div className="p-10 xs:p-0 mx-auto w-full">
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
              <h1 className="font-black text-xl mb-5 text-yellow-400 text-center">
                Formato de Registro
              </h1>
            </div>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Campos de Nombre */}
              <div className="mb-4">
                <input
                  id="primerNombre" // ID único agregado
                  {...register("primerNombre", {
                    required: "Este campo es obligatorio",
                  })}
                  placeholder="Primer Nombre"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
                {errors.primerNombre && (
                  <span className="text-red-600">
                    {errors.primerNombre.message}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <input
                  id="segundoNombre" // ID único agregado
                  {...register("segundoNombre")}
                  placeholder="Segundo Nombre (opcional)"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
              </div>

              <div className="mb-4">
                <input
                  id="apellidoPaterno" // ID único agregado
                  {...register("apellidoPaterno", {
                    required: "Este campo es obligatorio",
                  })}
                  placeholder="Apellido Paterno"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
                {errors.apellidoPaterno && (
                  <span className="text-red-600">
                    {errors.apellidoPaterno.message}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <input
                  id="apellidoMaterno" // ID único agregado
                  {...register("apellidoMaterno", {
                    required: "Este campo es obligatorio",
                  })}
                  placeholder="Apellido Materno"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
                {errors.apellidoMaterno && (
                  <span className="text-red-600">
                    {errors.apellidoMaterno.message}
                  </span>
                )}
              </div>

              {/* Campo de Correo y Teléfono */}
              <div className="mb-4">
                <input
                  id="correo" // ID único agregado
                  {...register("correo", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Correo inválido",
                    },
                  })}
                  type="email"
                  placeholder="Correo Electrónico"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
                {errors.correo && (
                  <span className="text-red-600">{errors.correo.message}</span>
                )}
              </div>

              <div className="mb-4">
                <input
                  id="telefono" // ID único agregado
                  {...register("telefono")}
                  placeholder="Teléfono (opcional)"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
              </div>

              {/* Selección de Rol */}
              <div className="mb-4 col-span-full">
                <select
                  id="rol" // ID único agregado
                  {...register("rol", {
                    required: "Este campo es obligatorio",
                  })}
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                >
                  <option value="">Selecciona un rol</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                {errors.rol && (
                  <span className="text-red-600">{errors.rol.message}</span>
                )}
              </div>

              {/* Justificación */}
              <div className="mb-4 col-span-full">
                <textarea
                  id="justificacion" // ID único agregado
                  {...register("justificacion", {
                    required: "Este campo es obligatorio",
                  })}
                  maxLength={300}
                  placeholder="Justificación"
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                />
                {errors.justificacion && (
                  <span className="text-red-600">
                    {errors.justificacion.message}
                  </span>
                )}
              </div>

              {/* Contraseña */}
              <div>
                <input
                  {...register("password", {
                    required: "Este campo es obligatorio",
                  })} // Usar register aquí
                  type="password"
                  id="password" // ID único agregado
                  required
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                  placeholder="Ingresa su contraseña"
                />
              </div>

              {/* Confirmar Contraseña */}
              <div>
                <input
                  {...register("confirmPassword", {
                    required: "Este campo es obligatorio",
                  })} // Usar register aquí
                  type="password"
                  id="confirmPassword" // ID único agregado
                  required
                  className="border border-blue-900 rounded-lg px-3 py-2 text-sm text-blue-900 focus:border-yellow-400 focus:ring-yellow-400 focus:ring-2 focus:outline-none w-full"
                  placeholder="Confirma su contraseña"
                />
              </div>

              {/* Botón de Registro */}
              <div className="col-span-full">
                <button
                  type="submit"
                  className="transition duration-200 bg-yellow-400 hover:bg-blue-900 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  Registrarse
                </button>
                <p className="text-center mt-4 text-sm text-blue-900">
                  Al hacer clic en &quot;Registrarse&quot;, aceptas nuestros
                  Términos de Servicio y Política de Privacidad.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
