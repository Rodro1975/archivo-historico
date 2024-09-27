import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // Importamos jsonwebtoken para manejar el JWT
import bcrypt from "bcrypt"; // bcrypt para hashear contraseñas
import pool from "../../../config/db"; // Importar la conexión a la base de datos

// Clave secreta para firmar el JWT. Es importante que esta clave sea segura y esté en variables de entorno.
const JWT_SECRET = process.env.JWT_SECRET || "clave_secreta_super_segura";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Consulta a la base de datos para buscar el usuario
    const query = "SELECT * FROM usuarios WHERE correo = ?";
    const [rows] = await pool.query(query, [email]);

    // Verifica si el usuario existe
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Correo o contraseña incorrectos" },
        { status: 401 }
      );
    }

    const user = rows[0];

    // Verifica la contraseña (hasheada en la base de datos)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Correo o contraseña incorrectos" },
        { status: 401 }
      );
    }

    // Si la contraseña es válida, generamos el JWT
    const token = jwt.sign(
      {
        id: user.id_usuario, // ID del usuario
        rol: user.rol, // Rol del usuario
      },
      JWT_SECRET, // Clave secreta
      { expiresIn: "10m" } // Token válido por 10 minutos
    );

    // Retornamos el token en la respuesta
    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error en el servidor" },
      { status: 500 }
    );
  }
}
