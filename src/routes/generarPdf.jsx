import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

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


    const {nombre,cedula,fecha_ingreso,cargo,salario} = formData

    window.alert(nombre,cedula,fecha_ingreso,cargo,salario)
    try {
      const response = await fetch("http://localhost:5000/generar_pdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("PDF generado:", result);
      } else {
        const errorData = await response.json();
        console.error("Error al generar PDF:", errorData);
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema al generar el PDF.");
    }
  };
  return (
    <main className="generate-pdf">
      <div style={{height: "100%"}}>
        <form className="gap-generar ">
        <p className="title">Edicion Pdf.</p>
          
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Cedula"
            defaultValue={"1043134326"}
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
          />
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de ingreso"
            name="fecha_ingreso"
            value={formData.fecha_ingreso}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Salario"
            name="salario"
            value={formData.salario}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-danger w-full" >Enviar</button>
        </form>
      </div>
      <div>
      <embed src="" type="" />
      </div>
    </main>
  );
}