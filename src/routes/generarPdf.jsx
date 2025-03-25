import { useState } from "react";

export default function GenerarPdf() {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    fecha_ingreso: "",
    cargo: "",
    salario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/generar_pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    }
  };

  return (
    <div className="generate-pdf">
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
    </div>
  );
}