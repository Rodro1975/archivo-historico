// app/libros/page.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BookForm from "@/components/BookForm"; // Asegúrate de que la ruta sea correcta

const LibroPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFormSubmit = async (formData) => {
    // Crear una instancia de FormData
    const formDataToSend = new FormData();

    // Agregar los campos del formulario a FormData
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Enviar los datos al servidor
    const response = await fetch("/api/libros", {
      method: "POST",
      body: formDataToSend, // Enviar FormData directamente
    });

    if (response.ok) {
      setSuccessMessage("Libro registrado exitosamente");
      setErrorMessage(null);
      router.push("/dashboard"); // Redirigir al dashboard
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || "Error al registrar el libro");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl mb-6">
        Formulario de Registro para el Archivo Histórico de la Librería de la UG
      </h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <BookForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default LibroPage;
