import { useState } from "react";

export default function GenerarPdf() {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    fecha_ingreso: "",
    cargo: "",
    salario: "",
  });

<<<<<<< HEAD
=======
  const [pdfUrl, setPdfUrl] = useState(""); // Estado para almacenar la URL del PDF
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

>>>>>>> 0177b900d9dfdda5fdb3b49c6aa600f4916689b5
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

<<<<<<< HEAD
  const handleSubmit = async () => {
=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar errores anteriores

    // Validación simple de campos vacíos
    for (let key in formData) {
      if (!formData[key]) {
        setErrorMessage(`El campo "${key}" no puede estar vacío.`);
        return;
      }
    }

>>>>>>> 0177b900d9dfdda5fdb3b49c6aa600f4916689b5
    try {
      const response = await fetch("http://localhost:5000/generar_pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

<<<<<<< HEAD
      if (response.ok) {
        const data = await response.json();
        alert("PDF generado con éxito");
        // Opcional: Abrir o descargar el PDF
        window.open(data.ruta, "_blank");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      alert("Hubo un problema al generar el PDF.");
=======
      const data = await response.json();

      if (response.ok) {
        setPdfUrl(data.pdf_url); // Guarda la URL del PDF en el estado
      } else {
        setErrorMessage(data.error || "Error al generar el PDF.");
      }
    } catch (error) {
      setErrorMessage("Error en la solicitud. Verifica el backend.");
      console.error("Error en la solicitud:", error);
>>>>>>> 0177b900d9dfdda5fdb3b49c6aa600f4916689b5
    }
  };

  return (
    <div className="generate-pdf">
<<<<<<< HEAD
      <div>
        <input
          type="text"
          className="input"
          placeholder="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Cedula"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Fecha de ingreso"
          name="fecha_ingreso"
          value={formData.fecha_ingreso}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Salario"
          name="salario"
          value={formData.salario}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
=======
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
        <input type="text" name="cedula" placeholder="Cédula" value={formData.cedula} onChange={handleChange} />
        <input type="text" name="fecha_ingreso" placeholder="Fecha de ingreso" value={formData.fecha_ingreso} onChange={handleChange} />
        <input type="text" name="cargo" placeholder="Cargo" value={formData.cargo} onChange={handleChange} />
        <input type="text" name="salario" placeholder="Salario" value={formData.salario} onChange={handleChange} />
        <button type="submit">Generar PDF</button>
      </form>

      {/* Mostrar mensaje de error si existe */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Mostrar el PDF si la URL está disponible */}
      {pdfUrl && (
        <div className="pdf-container">
          <iframe src={pdfUrl} width="100%" height="600px" title="Vista previa del PDF"></iframe>
        </div>
      )}
>>>>>>> 0177b900d9dfdda5fdb3b49c6aa600f4916689b5
    </div>
  );
}