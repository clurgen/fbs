import React, { useState } from "react";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleService from "../../services/article.service";

export default function CreationArticle() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [episode, setEpisode] = useState(0);
  const [nbEpisodes, setNbEpisodes] = useState(0);
  const [nbSaison, setNbSaison] = useState(0);
  const [video, setVideo] = useState("");
  const [avis, setAvis] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [articleList, setArticleList] = useState([]);
  let body = {
    name: name,
    description: description,
    nbEpisodes: nbEpisodes,
    nbSaison: nbSaison,
    episode: episode,
    video: video,
    avis: avis,
    playlist: playlist,
  };
  const AjoutArticle = () => {
    ArticleService.createArticle(body)
      .then(() => {
        toast.success(" Validé !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setArticleList([
          ...articleList,
          {
            name: name,
            description: description,
            nbEpisodes: nbEpisodes,
            nbSaison: nbSaison,
            episode: episode,
            video: video,
            avis: avis,
            playlist: playlist,
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
        toast.error(" FUCK !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center">
        <div className="col-md-3">
          <div className="form-group">
            <h2 class="h2">Super formulaire !</h2>
            <label>Nom</label>
            <input
              class="form-control"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label>Description</label>
            <input
              class="form-control"
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <label>Nombre de Saison</label>
            <input
              class="form-control"
              type="text"
              onChange={(event) => {
                setNbSaison(event.target.value);
              }}
            />
            <label>Nombre d'épisode</label>
            <input
              class="form-control"
              type="text"
              onChange={(event) => {
                setNbEpisodes(event.target.value);
              }}
            />
            <label>Episode</label>
            <input
              class="form-control"
              type="text"
              onChange={(event) => {
                setEpisode(event.target.value);
              }}
            />
            <label>Vidéo</label>
            <input
              class="form-control"
              type="text"
              onChange={(event) => {
                setVideo(event.target.value);
              }}
            />
            <label>Avis</label>
            <input
              className="form-control"
              type="text"
              onChange={(event) => {
                setAvis(event.target.value);
              }}
            />
            <label>Ressenti</label>
            <select class="form-control">
              <option value="superTop">SUPER Top</option>
              <option value="top">Top</option>
              <option value="moyen">Moyen</option>
              <option value="pasOuf">Pas ouf</option>
              <option value="naze">Naze</option>
            </select>
            <label>Playlist</label>
            <select
              class="form-control"
              value={playlist}
              onChange={(e) => setPlaylist(e.target.value)}
            >
              <option value="">Choisir</option>
              <option value="Mushoku_review">Mushoku</option>
              <option value="Spider_review">spider so what</option>
              <option value="FBS">FBS</option>
            </select>
            <button className="btn btn-primary" onClick={AjoutArticle}>
              Ajouter un article
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
}