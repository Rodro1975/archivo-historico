// /hooks/useAuth.js
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState({
    role: "admin", // Cambia esto según sea necesario
  });

  return { user };
};

export { useAuth };
