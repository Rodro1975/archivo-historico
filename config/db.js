// config/db.js
import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_archivoHistorico",
});

export default pool;
