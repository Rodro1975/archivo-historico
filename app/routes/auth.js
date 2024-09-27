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

    // Crear token
    const token = jwt.sign(
      { id: user.id_usuario, rol: user.rol }, // Cambié 'role' a 'rol'
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Redirección según el rol
    if (user.rol === "Administrador") {
      res.json({ token, redirectTo: "/admin-dashboard" });
    } else if (user.rol === "Editor") {
      res.json({ token, redirectTo: "/editor-dashboard" });
    } else {
      res.json({ token, redirectTo: "/user-dashboard" });
    }
  } catch (error) {
    console.error("Error en el login: ", error);
    res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
