// app/api/getRegister/route.js

import { createClient } from "@supabase/supabase-js";

import bcrypt from "bcryptjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Variables de entorno de Supabase no configuradas correctamente."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    // Extraer datos de la solicitud

    const {
      primerNombre,

      segundoNombre,

      apellidoPaterno,

      apellidoMaterno,

      correo,

      telefono,

      rol,

      justificacion,

      password,
    } = await req.json();

    // Validar campos obligatorios

    if (
      !primerNombre ||
      !apellidoPaterno ||
      !apellidoMaterno ||
      !correo ||
      !rol ||
      !justificacion ||
      !password
    ) {
      return new Response(
        JSON.stringify({ message: "Faltan campos obligatorios" }),

        { status: 400 }
      );
    }

    // Crear usuario en Supabase Auth

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: correo,

      password: password,
    });

    if (authError) {
      console.error("Error en Supabase Auth:", authError.message);

      return new Response(JSON.stringify({ message: authError.message }), {
        status: 400,
      });
    }

    if (!authData || !authData.user) {
      console.error("Error inesperado: No se recibió 'user' de Supabase Auth.");

      return new Response(
        JSON.stringify({ message: "Error desconocido en la autenticación" }),

        { status: 500 }
      );
    }

    const idAuth = authData.user.id; // UUID generado por Supabase Auth

    // Encriptar contraseña

    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar datos en la tabla usuarios

    const { data: dbData, error: dbError } = await supabase

      .from("usuarios")

      .insert([
        {
          id_auth: idAuth, // UUID desde Supabase Auth

          primer_nombre: primerNombre,

          segundo_nombre: segundoNombre || null,

          apellido_paterno: apellidoPaterno,

          apellido_materno: apellidoMaterno || null,

          correo: correo,

          telefono: telefono || null,

          rol: rol,

          justificacion: justificacion,

          password: hashedPassword,
        },
      ]);

    if (dbError) {
      console.error("Error al insertar en la tabla usuarios:", dbError.message);

      return new Response(JSON.stringify({ message: dbError.message }), {
        status: 400,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Registro exitoso",

        authUser: authData.user,

        userData: dbData,
      }),

      { status: 200 }
    );
  } catch (error) {
    console.error("Error inesperado:", error);

    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
