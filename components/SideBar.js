// components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="sidebar"
      style={{
        padding: "20px",
        background: "var(--color-gold)",
        width: "250px",
        marginTop: "60px", // Margen superior para que inicie debajo del header
      }}
    >
      <h2>Navegación</h2>
      <ul>
        <li>
          <a href="/books">Libros</a>
        </li>
        <li>
          <a href="/research">Investigaciones</a>
        </li>
        <li>
          <a href="/requests">Solicitudes</a>
        </li>
        <li>
          <a href="/contact">Contactar</a>
        </li>
      </ul>

      <h2>Categorías</h2>
      <ul>
        <li>
          <a href="/category/history">Historia</a>
        </li>
        <li>
          <a href="/category/science">Ciencia</a>
        </li>
      </ul>

      <h2>Últimos Documentos Consultados</h2>
      <ul>
        <li>
          <a href="/document/1">Título del Documento 1</a>
        </li>
        <li>
          <a href="/document/2">Título del Documento 2</a>
        </li>
      </ul>

      <h2>Área de Formularios</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="request">Solicitud:</label>
        <textarea
          id="request"
          rows="3"
          placeholder="Escribe tu solicitud aquí..."
        ></textarea>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Enviar Solicitud
        </button>
      </form>

      <h2>Estadísticas del Archivo</h2>
      <p>Total de Libros: 1500</p>
    </aside>
  );
};

export default Sidebar;
