import supabase from "@/config/db"; // Asegúrate de que este archivo configure correctamente tu cliente de Supabase

export async function POST(req) {
  try {
    const { token } = await req.json();

    // Verifica que se haya proporcionado un token
    if (!token) {
      return new Response(JSON.stringify({ error: "Token no proporcionado" }), {
        status: 400,
      });
    }

    // Usa la API de Supabase para obtener información del usuario desde el token
    const { data: user, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return new Response(
        JSON.stringify({ error: "Token inválido o expirado" }),
        { status: 401 }
      );
    }

    // Retorna el rol del usuario u otra información relevante
    return new Response(
      JSON.stringify({ role: user.role || "user" }), // Modifica según los datos que guardas en tu base de datos
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al verificar la sesión:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 500 }
    );
  }
}
