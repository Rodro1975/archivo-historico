// `pages/_app.js`
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Asegúrate de configurar supabaseClient
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Obtener la sesión al cargar la aplicación
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    // Suscribirse a cambios de autenticación
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Cambio de autenticación:", event, session); // Depuración
        setUser(session?.user || null);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Redirigir si el usuario no está autenticado en rutas protegidas
  useEffect(() => {
    const protectedRoutes = ["/dashboard", "/catalog", "/completeCatalog"];
    if (!user && protectedRoutes.includes(router.pathname)) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <Component {...pageProps} user={user} />;
}
