import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Firma from "../../public/firma-removebg-preview.png";

export default function FastEdicion() {
    const imageValue = useRef();
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = () => {
        const file = imageValue.current?.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = imageValue.current?.files[0];
        if (!file) {
            alert("Selecciona un archivo antes de enviar");
            return;
        }
        console.log("Archivo seleccionado:", file);
    };

    return (
        <div className="flex justify-center p-12 w-full min-h-svh gap-4">
            <div className="flex flex-col gap-2">
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

                    <label for="file-upload" className="custom-file-upload w-fit" title='Cargar firma' >
                    <Icon icon="lucide:file-signature" width="24" height="24" />
                    </label>
                    <input id="file-upload" type="file" ref={imageValue} onChange={handleFileChange} />

                    <button type="submit"  className="button-red w-fit " >
                    <Icon icon="lucide:send-horizontal" width="24" height="24" color='#fff' />
                    </button>

                </form>
                <button title='Descargar documento' className="p-2 bg-slate-100 rounded border-b-2 border-slate-300 " onClick={() => {
                    window.print()
                }}>
                    <Icon icon="lucide:download" width="24" height="24" />
                </button>

            </div>

            <main className="w-4xl shadow-md rounded p-12">
                <div className="tx text-xs">
                    <p contentEditable>
                        Expendida en Barranquilla el día <strong>{new Date().getDate()}</strong> del mes{" "}
                        <strong>{new Date().getMonth() + 1}</strong> del{" "}
                        <strong>{new Date().getFullYear()}</strong>
                    </p>
                </div>
                <img src="../../public/logo_nave.webp" alt="Logo" width={80} height={80} />
                <div className="texto-bold flex flex-col mt-9 mb-12 gap-1">
                    <strong >Red5G</strong>
                    <strong>Alaska Ramirez</strong>
                    <p>Recursos Humanos</p>
                </div>
                <p className="mt-28" contentEditable>
                    Que el (la) señor(a) Joel Cortina identificado(a) con cedula de ciudadania no. 1044605578. Se encuentra
                    activo en la empresa desde 2025-01-15 mediante contrato fijo, ocupando el cargo de gerente; siendo su
                    salario promedio mensual de $1.623.500
                </p>

                <p className='mt-20' contentEditable>
                    Se extiende la presente constancia para los fines que considere pertinentes.
                </p>

                <div className="border-b-2 border-zinc-300 flex text-center justify-center " style={{ marginTop: "300px" }}>
                    <img src={imagePreview || Firma} alt="Firma" width={200} height={100} />
                </div>
                <p className='text-center'>Alaska Martinez</p>
            </main>
        </div>
    );
}
