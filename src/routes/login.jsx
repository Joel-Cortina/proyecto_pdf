import Red5glogo from "../assets/red5glogo.jpg";
import { useRef, useState } from "react";
const styles = {
  position: "absolute",
  cursor: "pointer",
  right: "10px",
  top: "20px",
};

export default function Login() {
  const [isSee, setIsSee] = useState(false);
  return (
    <div className="login">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <img src={Red5glogo} alt="Red 5G Logo" className="side-image-img" />
          </div>
          <div className="col-md-6 rigth">
            <div className="input-box">
              <header>¡Bienvenido a Red 5G!</header>
              <header className="bienvenida">Inicio de Sesión</header>
              <div className="input-field">
                <input type="text" className="input" id="username" required />
                <label htmlFor="username">Usuario</label>
              </div>
              <div className="input-field">
                <input
                  type={isSee ? "text" : "password"}
                  className="input"
                  id="password"
                  required
                />
                <label htmlFor="password">Contraseña</label>
                <i
                  className="fa fa-eye"
                  id="togglePassword"
                  style={styles}
                  onClick={() => {
                    setIsSee(!isSee);
                  }}
                ></i>
              </div>
              <div className="input-field">
                <input
                  type="submit"
                  className="submit"
                  id="loginButton"
                  value="Iniciar sesión"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
