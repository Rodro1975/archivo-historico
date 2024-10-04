import pool from "../../../config/db"; // Asegúrate de que la ruta sea correcta

export async function POST(req) {
  const formData = await req.formData(); // Manejo de FormData

  // Obtener los campos del formulario
  const codigo_registro = formData.get("codigoRegistro");
  const isbn = formData.get("isbn");
  const doi = formData.get("doi");
  const titulo = formData.get("titulo");
  const subtitulo = formData.get("subtitulo");
  const materia = formData.get("materia");
  const tematica = formData.get("tematica");
  const coleccion = formData.get("coleccion");
  const numero_edicion = formData.get("numeroEdicion");
  const anio_publicacion = formData.get("anioPublicacion");
  const formato = formData.get("formato");
  const responsable_publicacion = formData.get("responsablePublicacion");
  const correo_responsable = formData.get("correoResponsable");
  const telefono_responsable = formData.get("telefonoResponsable");
  const campus = formData.get("campus");
  const division = formData.get("division");
  const departamento = formData.get("departamento");
  const tipo_autoria = formData.get("tipoAutoria");
  const contraPortada = formData.get("contraPortada");
  const dimensiones = formData.get("dimensiones");
  const numero_paginas = formData.get("numeroPaginas");
  const idioma = formData.get("idioma");
  const peso_gramos = formData.get("pesoGramos");
  const tiraje_o_ibd = formData.get("tiraje_o_ibd");
  const sinopsis = formData.get("sinopsis");
  const es_traduccion = formData.get("esTraduccion") === "true";
  const deposito_legal = formData.get("depositoLegal");
  const portadaFile = formData.get("portada");
  const archivo_pdfFile = formData.get("archivo_pdf");

  if (!codigo_registro || !titulo || !anio_publicacion) {
    return new Response(
      JSON.stringify({
        message:
          "Los campos código de registro, título y año de publicación son obligatorios.",
      }),
      { status: 400 }
    );
  }

  if (portadaFile && !portadaFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
    return new Response(
      JSON.stringify({
        message: "El archivo de portada debe ser una imagen válida.",
      }),
      { status: 400 }
    );
  }

  if (archivo_pdfFile && !archivo_pdfFile.name.endsWith(".pdf")) {
    return new Response(
      JSON.stringify({ message: "El archivo debe ser un PDF." }),
      { status: 400 }
    );
  }

  try {
    const [existingBook] = await pool.query(
      "SELECT * FROM libros WHERE codigo_registro = ?",
      [codigo_registro]
    );

    if (existingBook.length > 0) {
      return new Response(
        JSON.stringify({ message: "El libro ya está registrado" }),
        { status: 400 }
      );
    }

    const [result] = await pool.query(
      `INSERT INTO libros 
           (codigo_registro, isbn, doi, titulo, subtitulo, materia, tematica, coleccion, numero_edicion, anio_publicacion,
            formato, responsable_publicacion, correo_responsable, telefono_responsable, campus, division, departamento, 
            tipo_autoria, contraPortada, dimensiones, numero_paginas, idioma, peso_gramos, tiraje_o_ibd, es_traduccion,
            sinopsis, deposito_legal, portada, archivo_pdf)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        codigo_registro,
        isbn || null,
        doi || null,
        titulo,
        subtitulo || null,
        materia || null,
        tematica || null,
        coleccion || null,
        numero_edicion || null,
        anio_publicacion,
        formato || null,
        responsable_publicacion || null,
        correo_responsable || null,
        telefono_responsable || null,
        campus || null,
        division || null,
        departamento || null,
        tipo_autoria || null,
        contraPortada || null,
        dimensiones || null,
        numero_paginas || null,
        idioma || null,
        peso_gramos || null,
        tiraje_o_ibd || null,
        es_traduccion ? 1 : 0,
        sinopsis || null,
        deposito_legal ? 1 : 0,
        portadaFile ? portadaFile.name : null,
        archivo_pdfFile ? archivo_pdfFile.name : null,
      ]
    );

    return new Response(
      JSON.stringify({
        message: "Libro registrado con éxito",
        id: result.insertId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar el libro:", error);
    return new Response(
      JSON.stringify({ message: "Error en el servidor", error: error.message }),
      { status: 500 }
    );
  }
}
