//app/api/getLibros/route.js

import supabase from "@/supabase"; // Importa la instancia configurada de supabase

export async function GET() {
  try {
    const { data, error } = await supabase.from("libros").select("*");

    if (error) {
      return new Response(
        JSON.stringify({ message: "Error al obtener los libros", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error al procesar la solicitud", error }),
      { status: 500 }
    );
  }
}
