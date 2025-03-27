import { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";




const Modal = ({ setOpenPopover }) => {

  const [email, setEmail] = useState("")
  const file = useRef(null)

  const handleSendToEmail = (e) => {
    e.preventDefault()

    const formulario = new FormData()

    formulario.append("archivo", file.current.files[0])
    formulario.append("email", email)

    console.log(formulario)

    fetch("http://localhost:5000/enviar_correo", {
      method: "POST",
      body: formulario
    })
  }

  return (
    <div className="w-full inset-0 h-full fixed bg-black/15 flex justify-center items-center">
      <div className="w-md bg-white h-auto shadow-xl p-4 rounded-md" >
        <div className="flex justify-end">
          <button className="flex justify-end" onClick={() => setOpenPopover(false)} > x </button>

        </div>
        <form className="flex flex-col gap-2 justify-center items-center" onSubmit={(e) => handleSendToEmail(e)} >

          <div className="w-full max-w-sm min-w-[200px]">
            <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="file" placeholder="Email" ref={file} />

            <label for="file-upload" className="custom-file-upload w-full" title='Cargar firma' >
              Cargar archivo <Icon icon="lucide:file-signature" width="24" height="24" />
            </label>
            <input id="file-upload" type="file" ref={file} />

            <button
              className="group relative inline-flex items-center overflow-hidden rounded-sm bg-red-600 w-full px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
              href="#"
            >

              <span className=" w-full text-sm font-medium transition-all group-hover:me-4"> Enviar Correo </span>
              <Icon icon="lucide:arrow-right" width="24" height="24" />
            </button>


          </div>
        </form>
      </div>
    </div>)
}



const PdfViewer = () => {

  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center w-full h-screen "
    >
      {popoverOpen ? <Modal setOpenPopover={setPopoverOpen} /> : null}

      <embed
        src="/TEMPLATE.pdf"
        type="application/pdf"
        style={{
          width: "80%",
          height: "90vh",
          border: "2px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="flex flex-row-reverse gap-4 ">
        <button className="button-red" onClick={() => setPopoverOpen(true)}  > <Icon icon="lucide:mail" width="17" height="17" /> Enviar al correo </button><button className="p-2 bg-sky-200 rounded-md ">Descargar</button>
      </div>
    </div>
  );
};





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

    const { nombre, cedula, fecha_ingreso, cargo, salario } = formDat

    window.alert(nombre, cedula, fecha_ingreso, cargo, salario)
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
    <main className="min-h-lvh w-full grid grid-cols-1 md:grid-cols-2 md:p-12">
      
      <div>
        <PdfViewer />
      </div>
    </main>
  );
}