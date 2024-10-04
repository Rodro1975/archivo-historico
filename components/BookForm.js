// components/BookForm.js
import { useState } from "react";

const BookForm = ({ onSubmit }) => {
  const initialFormData = {
    codigoRegistro: "",
    isbn: "",
    doi: "",
    titulo: "",
    subtitulo: "",
    materia: "",
    tematica: "",
    coleccion: "",
    numeroEdicion: "",
    anioPublicacion: "",
    formato: "",
    responsablePublicacion: "",
    correoResponsable: "",
    telefonoResponsable: "",
    campus: "",
    division: "",
    departamento: "",
    tipoAutoria: "",
    contraPortada: "",
    dimensiones: "",
    numeroPaginas: "",
    idioma: "",
    pesoGramos: "",
    tiraje_o_ibd: "",
    esTraduccion: false,
    sinopsis: "",
    depositoLegal: "",
    fechaRegistro: "",
    portada: null, // Para archivo
    archivoPdf: null, // Para archivo
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0], // Subida de archivos
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear una instancia de FormData
    const formDataToSend = new FormData();

    // Agregar los campos del formulario a FormData
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Enviar la solicitud
    const response = await fetch("/api/libros", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      // Manejo de respuesta exitosa
      const data = await response.json();
      alert(`Libro registrado con éxito: ID ${data.id}`);
      // Limpiar el formulario
      setFormData(initialFormData);
    } else {
      // Manejo de error
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl mb-6">Registrar un nuevo libro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Aquí puedes agregar todos los campos del formulario */}
        <div>
          <label htmlFor="codigoRegistro">Código Registro</label>
          <input
            type="text"
            id="codigoRegistro"
            name="codigoRegistro"
            value={formData.codigoRegistro}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        {/* Repetir este bloque para cada campo */}
        <div>
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="doi">DOI</label>
          <input
            type="text"
            id="doi"
            name="doi"
            value={formData.doi}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="subtitulo">Subtítulo</label>
          <input
            type="text"
            id="subtitulo"
            name="subtitulo"
            value={formData.subtitulo}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="materia">Materia</label>
          <input
            type="text"
            id="materia"
            name="materia"
            value={formData.materia}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="tematica">Tematica</label>
          <input
            type="text"
            id="tematica"
            name="tematica"
            value={formData.tematica}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="coleccion">Colección</label>
          <input
            type="text"
            id="coleccion"
            name="coleccion"
            value={formData.coleccion}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="numeroEdicion">Número Edición</label>
          <input
            type="number" // Cambiar a tipo number
            id="numeroEdicion"
            name="numeroEdicion"
            value={formData.numeroEdicion}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="anioPublicacion">Año Publicación</label>
          <input
            type="number" // Cambiar a tipo number
            id="anioPublicacion"
            name="anioPublicacion"
            value={formData.anioPublicacion}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="formato">Formato</label>
          <select
            id="formato"
            name="formato"
            value={formData.formato}
            onChange={handleChange}
            required
            className="input-field text-blue"
          >
            <option value="" disabled>
              Selecciona un formato
            </option>
            <option value="impreso">Impreso</option>
            <option value="electronico">Electrónico</option>
            <option value="ambos">Ambos</option>
          </select>
        </div>
        <div>
          <label htmlFor="responsablePublicacion">
            Responsable Publicación
          </label>
          <input
            type="text"
            id="responsablePublicacion"
            name="responsablePublicacion"
            value={formData.responsablePublicacion}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="correoResponsable">Correo Responsable</label>
          <input
            type="email" // Cambiar a tipo email
            id="correoResponsable"
            name="correoResponsable"
            value={formData.correoResponsable}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="telefonoResponsable">Teléfono Responsable</label>
          <input
            type="text"
            id="telefonoResponsable"
            name="telefonoResponsable"
            value={formData.telefonoResponsable}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="campus">Campus</label>
          <input
            type="text"
            id="campus"
            name="campus"
            value={formData.campus}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="division">División</label>
          <input
            type="text"
            id="division"
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="departamento">Departamento</label>
          <input
            type="text"
            id="departamento"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="tipoAutoria">Tipo Autoría</label>
          <select
            id="tipoAutoria"
            name="tipoAutoria"
            value={formData.tipoAutoria}
            onChange={handleChange}
            required
            className="input-field text-blue"
          >
            <option value="" disabled>
              Selecciona un tipo de autoría
            </option>
            <option value="individual">Individual</option>
            <option value="coautoría">Coautoría</option>
            <option value="colectiva">Colectiva</option>
          </select>
        </div>
        <div>
          <label htmlFor="contraPortada">Contra Portada</label>
          <textarea
            id="contraPortada"
            name="contraPortada"
            value={formData.contraPortada}
            onChange={handleChange}
            required
            className="input-field text-blue"
            rows="4" // Puedes ajustar el número de filas según sea necesario
          />
        </div>
        <div>
          <label htmlFor="dimensiones">Dimensiones</label>
          <input
            type="text"
            id="dimensiones"
            name="dimensiones"
            value={formData.dimensiones}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="numeroPaginas">Número de Páginas</label>
          <input
            type="number" // Cambiar a tipo number
            id="numeroPaginas"
            name="numeroPaginas"
            value={formData.numeroPaginas}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="idioma">Idioma</label>
          <input
            type="text"
            id="idioma"
            name="idioma"
            value={formData.idioma}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="pesoGramos">Peso en Gramos</label>
          <input
            type="number" // Cambiar a tipo number
            id="pesoGramos"
            name="pesoGramos"
            value={formData.pesoGramos}
            onChange={handleChange}
            required
            className="input-field text-blue"
          />
        </div>
        <div>
          <label htmlFor="tiraje_o_ibd">Tiraje ó IBD</label>
          <select
            id="tiraje_o_ibd"
            name="tiraje_o_ibd"
            value={formData.tiraje_o_ibd}
            onChange={handleChange}
            required
            className="input-field text-blue"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="tiraje">Tiraje</option>
            <option value="impresion_bajo_demanda">
              Impresión Bajo Demanda
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="esTraduccion">
            <input
              type="checkbox" // Cambiar a tipo checkbox
              id="esTraduccion"
              name="esTraduccion"
              checked={formData.esTraduccion} // Usa checked para manejar el estado del checkbox
              onChange={handleChange} // Maneja el cambio del checkbox
              className="input-field text-blue"
            />
            Traducción Español
          </label>
        </div>
        <div>
          <label htmlFor="sinopsis">Sinopsis</label>
          <textarea
            id="sinopsis"
            name="sinopsis"
            value={formData.sinopsis}
            onChange={handleChange}
            required
            className="input-field text-blue"
            rows="4" // Puedes ajustar el número de filas según sea necesario
          />
        </div>
        <div>
          <label htmlFor="depositoLegal">
            <input
              type="checkbox"
              id="depositoLegal"
              name="depositoLegal"
              checked={formData.depositoLegal} // Asegúrate de que uses checked
              onChange={handleChange}
              className="input-field text-blue"
            />
            Deposito Legal
          </label>
        </div>

        {/* ... otros campos aquí ... */}
        <div>
          <label htmlFor="portada">Portada</label>
          <input
            type="file"
            id="portada"
            name="portada"
            accept="image/*" // Asegúrate de aceptar solo imágenes
            onChange={handleFileChange} // Maneja el cambio de archivo
            required
            className="input-file"
          />
        </div>
        <div>
          <label htmlFor="archivo_pdf">Archivo PDF</label>
          <input
            type="file"
            id="archivo_pdf"
            name="archivo_pdf"
            accept=".pdf" // Asegúrate de aceptar solo archivos PDF
            onChange={handleFileChange} // Maneja el cambio de archivo
            required
            className="input-file"
          />
        </div>
        <button type="submit" className="btn-primary bg-green-500">
          Registrar Libro
        </button>
      </form>
    </div>
  );
};

export default BookForm;
