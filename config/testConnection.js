// config/testConnection.js
import db from "./db.js"; // Asegúrate de que esta ruta sea correcta

async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log("Conexión a la base de datos exitosa:", connection);
    connection.release(); // Libera la conexión
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

testConnection();
