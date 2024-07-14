import styles from "./loginButton.module.css";
import {KakaoLoginButton} from "../common/Buttons/KakaoLoginButton.jsx";
import {GithubLoginButton} from "../common/Buttons/GithubLoginButton.jsx";

export function LoginButton() {
  return (
    <div className={styles.block}>
      <KakaoLoginButton />
      <GithubLoginButton />
    </div>
  )
}