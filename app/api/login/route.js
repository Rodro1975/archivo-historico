// app/api/login/route.js
import supabase from "@/config/db";

export async function POST(req) {
  console.log("Solicitud recibida en /api/login");

  try {
    const { email, password } = await req.json();
    console.log("Datos recibidos:", { email, password });

    if (!email || !password) {
      console.error("Email o contraseña faltantes.");
      return new Response(
        JSON.stringify({ error: "Email o contraseña faltantes." }),
        { status: 400 }
      );
    }

    // Autenticación con Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log("Respuesta de Supabase:", { data, error });

    if (error || !data.user) {
      console.error("Error de autenticación:", error);
      return new Response(
        JSON.stringify({ error: "Credenciales inválidas." }),
        { status: 401 }
      );
    }

    // Devuelve el token de acceso en la respuesta
    const { access_token } = data.session;
    return new Response(
      JSON.stringify({
        success: true,
        token: access_token,
        role: data.user.role,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
