// components/BookForm.js
import { useState } from "react";

const BookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
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
  });

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
      // Aquí puedes limpiar el formulario o redirigir al usuario
      setFormData(initialFormData);
    } else {
      // Manejo de error
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  };

  return (
    <div className="container ml-auto mr-auto flex flex-wrap items-start mt-8 items-center justify-center">
      <div className="container mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-3xl text-blue font-extrabold text-center mb-6">
          Registrar un nuevo libro
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white px-8 pt-6 pb-8 mb-4 text-blue grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Aquí puedes agregar todos los campos del formulario */}
          <div className="mb-4">
            <label
              htmlFor="codigoRegistro"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Código Registro
            </label>
            <input
              type="text"
              id="codigoRegistro"
              name="codigoRegistro"
              value={formData.codigoRegistro}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu código de registro"
            />
          </div>
          {/* Repetir este bloque para cada campo */}
          <div className="mb-4">
            <label
              htmlFor="isbn"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el ISBN"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="doi"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              DOI
            </label>
            <input
              type="text"
              id="doi"
              name="doi"
              value={formData.doi}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el DOI"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="titulo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Título
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Titulo del libro"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subtitulo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Subtítulo
            </label>
            <input
              type="text"
              id="subtitulo"
              name="subtitulo"
              value={formData.subtitulo}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Subitulo del libro"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="materia"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Materia
            </label>
            <input
              type="text"
              id="materia"
              name="materia"
              value={formData.materia}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa la Materia"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tematica"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tematica
            </label>
            <input
              type="text"
              id="tematica"
              name="tematica"
              value={formData.tematica}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa la Tematica"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="coleccion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Colección
            </label>
            <input
              type="text"
              id="coleccion"
              name="coleccion"
              value={formData.coleccion}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa la Colección"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numeroEdicion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Número Edición
            </label>
            <input
              type="number" // Cambiar a tipo number
              id="numeroEdicion"
              name="numeroEdicion"
              value={formData.numeroEdicion}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Número de Edición"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="anioPublicacion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Año Publicación
            </label>
            <input
              type="number" // Cambiar a tipo number
              id="anioPublicacion"
              name="anioPublicacion"
              value={formData.anioPublicacion}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Año de Publicación"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="formato"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Formato
            </label>
            <select
              id="formato"
              name="formato"
              value={formData.formato}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Selecciona un formato de impresión
              </option>
              <option value="impreso">Impreso</option>
              <option value="electronico">Electrónico</option>
              <option value="ambos">Ambos</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="responsablePublicacion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Responsable Publicación
            </label>
            <input
              type="text"
              id="responsablePublicacion"
              name="responsablePublicacion"
              value={formData.responsablePublicacion}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa al Responsable de publicación"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="correoResponsable"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo Responsable
            </label>
            <input
              type="email" // Cambiar a tipo email
              id="correoResponsable"
              name="correoResponsable"
              value={formData.correoResponsable}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el correo del Responsable de publicación"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefonoResponsable"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Teléfono Responsable
            </label>
            <input
              type="text"
              id="telefonoResponsable"
              name="telefonoResponsable"
              value={formData.telefonoResponsable}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Teléfono del Responsable de publicación"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="campus"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Campus
            </label>
            <input
              type="text"
              id="campus"
              name="campus"
              value={formData.campus}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Campus"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="division"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              División
            </label>
            <input
              type="text"
              id="division"
              name="division"
              value={formData.division}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa la División"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="departamento"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Departamento
            </label>
            <input
              type="text"
              id="departamento"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Departamento"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tipoAutoria"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tipo Autoría
            </label>
            <select
              id="tipoAutoria"
              name="tipoAutoria"
              value={formData.tipoAutoria}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Selecciona un tipo de autoría
              </option>
              <option value="individual">Individual</option>
              <option value="coautoría">Coautoría</option>
              <option value="colectiva">Colectiva</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="contraPortada"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contra Portada
            </label>
            <textarea
              id="contraPortada"
              name="contraPortada"
              value={formData.contraPortada}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Escribe la Contraportada"
              rows="4" // Puedes ajustar el número de filas según sea necesario
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dimensiones"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Dimensiones
            </label>
            <input
              type="text"
              id="dimensiones"
              name="dimensiones"
              value={formData.dimensiones}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa las Dimensiones"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numeroPaginas"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Número de Páginas
            </label>
            <input
              type="number" // Cambiar a tipo number
              id="numeroPaginas"
              name="numeroPaginas"
              value={formData.numeroPaginas}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Número de Páginas"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="idioma"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Idioma
            </label>
            <input
              type="text"
              id="idioma"
              name="idioma"
              value={formData.idioma}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Idioma"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pesoGramos"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Peso en Gramos
            </label>
            <input
              type="number" // Cambiar a tipo number
              id="pesoGramos"
              name="pesoGramos"
              value={formData.pesoGramos}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa el Peso en Gramos"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tiraje_o_ibd"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tiraje ó IBD
            </label>
            <select
              id="tiraje_o_ibd"
              name="tiraje_o_ibd"
              value={formData.tiraje_o_ibd}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <div className="mb-4">
            <label
              htmlFor="esTraduccion"
              className="inline-flex items-center text-gray-700 text-sm font-bold"
            >
              <input
                type="checkbox"
                id="esTraduccion"
                name="esTraduccion"
                checked={formData.esTraduccion}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Es Traducción al Español</span>
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="sinopsis"
              className="inline-flex items-center text-gray-700 text-sm font-bold"
            >
              Sinopsis
            </label>
            <textarea
              id="sinopsis"
              name="sinopsis"
              value={formData.sinopsis}
              onChange={handleChange}
              required
              className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Escribe la Sinopsis"
              rows="4" // Puedes ajustar el número de filas según sea necesario
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="depositoLegal"
              className="inline-flex items-center text-gray-700 text-sm font-bold"
            >
              <input
                type="checkbox"
                id="depositoLegal"
                name="depositoLegal"
                checked={formData.depositoLegal} // Asegúrate de que uses checked
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Deposito Legal</span>
            </label>
          </div>

          {/* ... otros campos aquí ... */}
          <div className="mb-4">
            <label
              htmlFor="portada"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Portada
            </label>
            <input
              type="file"
              id="portada"
              name="portada"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue file:text-white hover:file:bg-gold"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="archivo_pdf"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Archivo PDF
            </label>
            <input
              type="file"
              id="archivo_pdf"
              name="archivo_pdf"
              accept=".pdf" // Asegúrate de aceptar solo archivos PDF
              onChange={handleFileChange} // Maneja el cambio de archivo
              required
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue file:text-white hover:file:bg-gold"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-auto h-12"
            >
              Registrar Libro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
