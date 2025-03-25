import { useState } from "react";
import Red5glogo from "../assets/red5glogo.jpg";
import { useNavigate } from "react-router-dom";

export default function Vistaprincipal() {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [pdfUrl, setPdfUrl] = useState(""); 
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false); 
  const [loading, setLoading] = useState(false); 

  const handleSearch = async () => {
    if (!cedula) {
      alert("Por favor, ingresa una cédula.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/buscarpdf?cedula=${cedula}`, {
        method: "GET",
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        setPdfUrl(url);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error al buscar el PDF:", error);
      alert("Hubo un problema al buscar el PDF.");
    }
  };

  const handleSendEmail = async () => {
    if (!email) {
      alert("Por favor, ingresa un correo electrónico.");
      return;
    }

    const pdfBlob = await fetch(pdfUrl)
      .then((response) => response.blob())
      .catch((error) => {
        console.error("Error al descargar el PDF:", error);
        alert("Hubo un problema al descargar el PDF.");
        throw error;  
      });

    const formData = new FormData();
    formData.append("email", email);
    formData.append("archivo", pdfBlob, `${cedula}.pdf`);  

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/enviar_correo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.mensaje || "Correo enviado correctamente");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un problema al enviar el correo.");
    } finally {
      setLoading(false);
      setShowModal(false); 
    }
  };

  return (
    <div className="appp">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={Red5glogo} alt="Red5G Logo" className="logo" />
            <span className="ms-2">Red 5G</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div id="searchBarContainer" className="d-flex align-items-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Buscar por cédula"
                    id="cedulaInput"
                    aria-label="Buscar"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    id="searchBtn"
                    onClick={handleSearch}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-danger custom-btn custom-btn-primary"
                  href="#"
                  id="generatePdfBtn"
                  onClick={() => navigate("/generar")}
                >
                  Generar PDF<i className="fa-solid fa-file-pdf"></i>
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary custom-btn custom-btn-primary"
                  href="/template/agregar_usuario.html"
                  id="addUserBtn"
                >
                  Añadir Usuario<i className="fa-solid fa-user-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {pdfUrl && (
        <div className="pdf-viewer">
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            title="PDF Viewer"
          />
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowModal(true)}
          >
            Enviar al correo
          </button>
        </div>
      )}

      {/* Modal para ingresar el correo */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enviar PDF por Correo</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa el correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSendEmail}
                  disabled={loading}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
