//app/api/testConnection/route.js

import supabase from "../../../config/db"; // Ajusta la ruta según sea necesario

export async function GET(req) {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .limit(1); // Cambia 'users' por tu tabla

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
