import Red5glogo from "../assets/red5glogo.jpg";
import { useNavigate } from "react-router-dom";

export default function Vistaprincipal() {

  const navigate = useNavigate();

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
                  />
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    id="searchBtn"
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link custom-icon"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-circle-user"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#logoutModal"
                    >
                      Cerrar Sesión
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4 flex-grow-1">
        <div id="pdfContainer" style={{display: "none"}}>
          <iframe id="pdfIframe" width="100%" height="700px"></iframe>
          <div className="mt-3 d-flex justify-content-between flex-wrap">
            <a
              className="nav-link btn btn-primary custom-btn custom-btn-primary"
              href="#"
              id="downloadPdfBtn"
            >
              Descargar PDF<i className="fa-solid fa-arrow-down"></i>
            </a>
            <a
              className="nav-link btn btn-success custom-btn custom-btn-success"
              href="#"
              id="sendEmailBtn"
              data-bs-toggle="modal"
              data-bs-target="#sendEmailModal"
            >
              Enviar por Correo <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Red 5G. Todos los derechos reservados - Cra. 53 # 80 -
            198 | Atlántica Torre Empresarial | Piso 9 | Barranquilla, Colombia
          </p>
        </div>
      </footer>

      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        aria-labelledby="logoutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="logoutModalLabel">
                Cerrar Sesión
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              ¿Estás seguro de que deseas cerrar sesión?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <a className="btn btn-danger" href="/template/index.html">
                Cerrar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
