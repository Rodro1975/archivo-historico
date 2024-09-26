import pool from "../../../config/db"; // Asegúrate de que la ruta sea correcta

export async function POST(req) {
  const {
    primerNombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    correo,
    telefono,
    password,
    rol,
    justificacion,
  } = await req.json();

  // Validar que los campos requeridos no estén vacíos
  if (!primerNombre || !apellidoPaterno || !correo || !password || !rol) {
    return new Response(
      JSON.stringify({
        message:
          "Los campos primer nombre, apellido paterno, correo, contraseña y rol son obligatorios.",
      }),
      { status: 400 }
    );
  }

  try {
    // Verificar si el usuario ya existe
    const [existingUser] = await pool.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [correo]
    );

    if (existingUser.length > 0) {
      return new Response(
        JSON.stringify({ message: "El usuario ya está registrado" }),
        { status: 400 }
      );
    }

    // Cifrar la contraseña (si lo deseas)
    // Importa bcrypt y utiliza esto para cifrar la contraseña
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Guardar el nuevo usuario en la base de datos
    const [result] = await pool.query(
      `INSERT INTO usuarios 
      (primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, correo, telefono, password, fecha_creacion, fecha_modificacion, rol, justificacion)
      VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?, ?)`,
      [
        primerNombre,
        segundoNombre || null, // Permitir null si no se proporciona
        apellidoPaterno,
        apellidoMaterno || null, // Permitir null si no se proporciona
        correo,
        telefono || null, // Permitir null si no se proporciona
        hashedPassword, // Asegúrate de utilizar la contraseña cifrada
        rol,
        justificacion || null, // Permitir null si no se proporciona
      ]
    );

    return new Response(
      JSON.stringify({
        message: "Usuario registrado con éxito",
        id: result.insertId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    return new Response(
      JSON.stringify({ message: "Error en el servidor", error }),
      { status: 500 }
    );
  }
}
