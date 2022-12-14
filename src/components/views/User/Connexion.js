import React, { useState } from "react";
import UserService from "../../services/user.service";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Connexion() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const Connexion = () => {
    let body = {
      mail: mail,
      password: password,
    };

    UserService.connexion(body).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
        toast.error(" Une erreur est survenue", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success(" Connecté !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoginStatus("Salut " + response.data[0].pseudo + " !");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center">
        <div className="col-md-3">
          <div className="form-group">
            <h1 class="h1">Se connecter</h1>
            <label>Login</label>
            <input
              class="form-control"
              placeholder="Email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              type="text"
            />
            <label>Mot de passe</label>
            <input
              class="form-control"
              placeholder="Mot de passe"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
            />
            <button className="btn btn-primary" onClick={Connexion}>
              Connexion
            </button>
            <h1>{loginStatus}</h1>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
