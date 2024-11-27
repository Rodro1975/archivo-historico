// config/db.js

import { createPool } from "mysql2/promise";
import { Pool } from "pg";

let pool;

if (process.env.NODE_ENV === "production") {
  // Configuración para PostgreSQL en producción
  pool = new Pool({
    connectionString: process.env.NEXT_PUBLIC_SUPABASE_URL, // Variable ya configurada en Vercel
    ssl: {
      rejectUnauthorized: false, // Permite conexiones seguras
    },
  });
} else {
  // Configuración para MySQL en desarrollo
  pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_archivoHistorico",
  });
}

export default pool;
