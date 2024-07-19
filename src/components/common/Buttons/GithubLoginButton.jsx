import styles from "../../Loginpage/loginButton.module.css";
import GithubSymbol from "../../../assets/githubLoginSymbol.png";
import axios from "axios";
import {BACKEND_SERVER_URL} from "../../../consts/url.js";

export function GithubLoginButton() {
  const onGithubLogin = () => {
    try {
      axios.post(
        `${BACKEND_SERVER_URL}/oauth2/authorization/github?redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`
      )
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <button
      className={styles.btn}
      style={{backgroundColor: "black", color: 'white'}}
      onClick={onGithubLogin}
    >
      <div className={styles.btnBlock}>
        <div className={styles.imageBlock}>
          <img style={{width: "18px"}} src={GithubSymbol} alt="kakao"/>
        </div>
        <label className={styles.labelBlock}>깃허브 로그인</label>
      </div>
    </button>
  )
}