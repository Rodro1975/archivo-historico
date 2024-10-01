const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import pool from "../../config/db"; // Importar la conexión a la base de datos

// Ruta para el login
router.post("/login", async (req, res) => {
  const { correo, password } = req.body; // Cambié 'username' a 'correo' para alinearlo con tu estructura de tabla

  try {
    // Buscar al usuario en la base de datos
    const [results] = await pool.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [correo]
    );

    if (results.length === 0) {
      return res.status(400).send("Usuario no encontrado");
    }

    const user = results[0];

    // Verificar contraseña
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Contraseña incorrecta");
    }

    // Mostrar el token almacenado
    console.log(localStorage.getItem("token"));
    console.log("Usuario encontrado:", user);
    // Crear token
    const token = jwt.sign(
      {
        nombre: user.primer_nombre,
        apellido: user.apellido_paterno,
        rol: user.rol,
        id: user.id_usuario, // Incluimos el id para referencia
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Redirección según el rol
    // Redirección según el rol
    res.json({ token, redirectTo: "/dashboard" }); // Redirigir a la misma página de dashboard
  } catch (error) {
    console.error("Error en el login: ", error);
    res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
