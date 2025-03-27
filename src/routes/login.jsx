import Red5glogo from "../assets/red5glogo.jpg";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

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
  const [logeado, setLogeado] = useState(false)


  const [token, setToken] = useState("")


  const inputRefPassword = useRef(null)
  const inputRefUsername = useRef(null)




  const handleSubmitLogin = (e) => {
    e.preventDefault();


    const requestData = {
      username: inputRefUsername.current.value,
      password: inputRefPassword.current.value
    };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          setLogeado(true)
          return response.json()
        }
      })
      .then((data) => {

        console.log("Respuestaassss:", data);
        localStorage.setItem("token", data.message)
        console.log(data.message)
        console.log(`Local storage Item :  ${localStorage.getItem("token")}`)
        location.href = "/home"

      })
      .catch((error) => {
        console.error("Ocurrio un error aqui:: ", error);
      });
  };



  const inputDisable = useRef(null);




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
              <form onSubmit={(e) => handleSubmitLogin(e)} >
                <div className="input-field">
                  <input
                    defaultValue={"admin"}
                    type="text"
                    className="input"
                    id="username"
                    required
                    ref={inputRefUsername}
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                  <label htmlFor="username" style={{ fontSize: "11px" }} >Usuario</label>
                </div>
                <div className="input-field">
                  <input
                    ref={inputRefPassword}
                    onChange={(e) => {
                      setPasswordInput(e.target.value)
                      console.log(passwordInput)
                    }}
                    type={isSee ? "text" : "password"}
                    className="input"
                    id="password"
                    required
                    defaultValue={123456}
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
                    className="button-red"
                    id="loginButton"
                    value="Iniciar sesión"
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
