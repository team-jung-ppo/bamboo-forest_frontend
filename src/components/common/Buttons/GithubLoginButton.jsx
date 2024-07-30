import styles from "../../Loginpage/loginButton.module.css";
import GithubSymbol from "../../../assets/githubLoginSymbol.png";

export function GithubLoginButton() {
  return (
    <form name="GithubLogin" action={`${import.meta.env.VITE_WAS_URL}/oauth2/authorization/github?redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`} method="POST">
      <button
        className={styles.githubBtn}
        type="submit"
      >
        <div className={styles.btnBlock}>
          <div className={styles.imageBlock}>
            <img style={{width: "18px", height: "18px", padding: "0"}} src={GithubSymbol} alt="kakao"/>
          </div>
          <label className={styles.labelBlock}>깃허브 로그인</label>
        </div>
      </button>
    </form>
  )
}