import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);

export default class UserService {
  /**
   * Créer un utilisateur
   * @param body
   */
  static async inscription(body) {
    console.log(process.env.REACT_APP_HOST_API, body);
    return await axios.post(
      `${process.env.REACT_APP_HOST_API}/inscription`,
      body
    );
  }

  /**
   * Se connecter
   * @param body
   * @returns {Promise<AxiosResponse<T>>}
   */
  static async connexion(body) {
    console.log(process.env.REACT_APP_HOST_API, body);
    return await axios.post(
      `${process.env.REACT_APP_HOST_API}/connexion`,
      body
    );
  }
}
