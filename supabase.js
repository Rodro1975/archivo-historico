import { createClient } from "@supabase/supabase-js";

// Usar las variables de entorno con el prefijo NEXT_PUBLIC_
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Las variables de entorno de Supabase no están configuradas correctamente."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
