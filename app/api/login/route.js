import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // Si estás usando bcrypt para hashear contraseñas
import pool from "../../../config/db"; // Importar la conexión a la base de datos

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

    // Verifica la contraseña (asumiendo que está hasheada en la base de datos)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Correo o contraseña incorrectos" },
        { status: 401 }
      );
    }

    // Generar token (JWT u otro método)
    const token = "tu_token"; // Cambia por la generación real del token

    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error en el servidor" },
      { status: 500 }
    );
  }
}
