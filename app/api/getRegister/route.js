// app/api/getRegister/route.js
import { createClient } from "@supabase/supabase-js";

// Crear cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Las variables de entorno de Supabase no están configuradas correctamente."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
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

    // Validación de campos obligatorios
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

    // Registro del usuario en Supabase
    const { user, error } = await supabase.auth.signUp({
      email: correo,
      password: password,
    });

    // Mensaje de depuración
    console.log("Respuesta de signUp:", { user, error });

    // Manejo de errores en el registro
    if (error) {
      console.error("Error al registrar en Supabase Auth:", error.message);
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }

    // Si todo sale bien
    return new Response(JSON.stringify({ message: "Registro exitoso", user }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error inesperado:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
