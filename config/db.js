// config/db.js
import { createClient } from "@supabase/supabase-js";

// Variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Log para depuración (solo en desarrollo)
if (process.env.NODE_ENV === "development") {
  console.log("Supabase URL:", supabaseUrl);
  console.log(
    "Supabase Key:",
    supabaseKey ? "**** (oculta)" : "No configurada"
  );
}

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
