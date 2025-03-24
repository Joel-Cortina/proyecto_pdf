import { useState } from "react";

export default function GenerarPdf() {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    fecha_ingreso: "",
    cargo: "",
    salario: "",
  });

  const [pdfUrl, setPdfUrl] = useState(""); // Estado para almacenar la URL del PDF
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

    try {
      const response = await fetch("http://localhost:5000/generar_pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setPdfUrl(data.pdf_url); // Guarda la URL del PDF en el estado
      } else {
        setErrorMessage(data.error || "Error al generar el PDF.");
      }
    } catch (error) {
      setErrorMessage("Error en la solicitud. Verifica el backend.");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="generate-pdf">
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
    </div>
  );
}
