import Red5glogo from "../assets/red5glogo.jpg";
import UserLogo from "../assets/userlogo.png"


export default function Añadir() {
  return (
  <div>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
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
                    Cerrar Sesión<i className="fa-solid fa-power-off ms-2"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container mt-4 flex-grow-1">
      <h2 className="titulo mb-4">Agregar Usuario</h2>
      <form className=" añadir p-4 p-md-5 border rounded-3 bg-light">
        <div className="text-center mb-4">
          <img src={UserLogo} alt="Red5G Logo" className="logouser" />
        </div>
        <div className="mb-3">
          <label for="username" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Usuario"
            required
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className="btn-añadir w-100">
          Añadir
        </button>
      </form>
    </div>

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
  </div>);
}
