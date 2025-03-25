import Red5glogo from "../assets/red5glogo.jpg";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const styles = {
  position: "absolute",
  cursor: "pointer",
  right: "10px",
  top: "20px",
};

export default function Login() {
  const [isSee, setIsSee] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");




  const handleSubmitLogin = (e) => {
    e.preventDefault()
    window.alert("jdsfjsf")
  }



  const inputDisable = useRef(null);

  useEffect(() => {

    if (nameInput.length > 0 && passwordInput.length > 10) {
      inputDisable.current.disabled = false;
    } else {
      inputDisable.current.disabled = true;
    }
  }, [nameInput, passwordInput]);

  return (
    <div className="login">
      <div className="container main">
        <div className="roww">
          <div className="">
            <img src={Red5glogo} alt="Red 5G Logo" className="side-image-img" />
          </div>
          <div className="to-center">
            <div className="input-box">
              <header>¡Bienvenido a Red 5G!</header>
              <header className="bienvenida">Inicio de Sesión</header>
              <form onSubmit={handleSubmitLogin} >
                <div className="input-field">
                  <input
                    type="text"
                    className="input"
                    id="username"
                    required
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                  <label htmlFor="username" style={{ fontSize: "11px" }} >Usuario</label>
                </div>
                <div className="input-field">
                  <input
                    onChange={(e) => {
                      setPasswordInput(e.target.value)
                      console.log(passwordInput)
                    }}
                    type={isSee ? "text" : "password"}
                    className="input"
                    id="password"
                    required
                  />
                  <label htmlFor="password" style={{ fontSize: "11px" }} >Contraseña</label>
                  <i
                    id="togglePassword"
                    style={styles}
                    onClick={() => {
                      setIsSee(!isSee);
                    }}
                  > {isSee ? <Icon icon="lucide:eye" width="18" height="18" /> : <Icon icon="lucide:eye-off" width="18" height="18" />} </i>
                </div>
                <div className="input-field">
                  <input
                    ref={inputDisable}
                    type="submit"
                    className="submit"
                    id="loginButton"
                    value="Iniciar sesión"
                    disabled
                  />
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
