// app\api\catalogoCompleto\route.js
import pool from "../../../config/db";

export async function GET(req) {
  try {
    // Realiza la consulta a la base de datos para obtener los libros
    const [rows] = await pool.query(
      "SELECT portada, isbn, titulo, sinopsis FROM libros"
    );

    // Asegúrate de que `rows` es un array antes de mapearlo
    const formattedBooks = rows.map((libro) => ({
      coverImage: libro.portada
        ? `/uploads/images/${libro.portada}`
        : "/uploads/images/default-image.jpg",

      isbn: libro.isbn,
      title: libro.titulo,
      description: libro.sinopsis,
    }));

    // Retorna los libros en formato JSON
    return new Response(JSON.stringify(formattedBooks), { status: 200 });
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    return new Response(
      JSON.stringify({
        message: "Error al obtener los libros",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
