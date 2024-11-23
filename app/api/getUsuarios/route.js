import supabase from "@/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase.from("usuarios").select("*");

    if (error) {
      console.error("Error en la consulta a Supabase:", error.message); // Esto te ayudará a identificar el error exacto
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Datos recibidos desde Supabase:", data); // Esto te permitirá ver qué datos se están recibiendo

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error inesperado:", error.message);
    return new Response(JSON.stringify({ error: "Error inesperado" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
