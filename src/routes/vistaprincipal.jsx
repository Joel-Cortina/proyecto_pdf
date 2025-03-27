import { useState } from "react";
import Red5glogo from "../assets/red5glogo.jpg";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';





const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);



export default function Vistaprincipal() {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!cedula) {
      window.alert("Por favor, ingresa una cédula.");
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
          <a className="navbar-brand d-flex align-items-center" >
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
                    placeholder="Cédula"
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
                <Link
                  to={"/generar"}
                  className="btn"
                  href="#"
                  id="generatePdfBtn"
                >
                  Generar PDF <Icon icon="mdi:file-pdf-box" width="20" height="20" />
                </Link>
              </li>
              <li >
                <Link to={"/añadir"} className="btn" >
                  Añadir Usuario <Icon icon="lucide:user-round" width="24" height="24" color="#fff" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <main className="" style={{ padding: "1rem" }} >
        <h1>Example</h1>
        <div>
        <embed src={"../../public/TEMPLATE.pdf"} width="50%" height="900px" type="application/pdf" />

        </div>
        <div className="button-group">
          <button className="btn btn-danger">Enviar al correo</button>
          <button className="btn" >Descargar</button>
        </div>
       
      </main>

    

    </div>
  );
}

