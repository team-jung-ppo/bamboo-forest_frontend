import styles from "./loginButton.module.css";
import {KakaoLoginButton} from "../common/Buttons/KakaoLoginButton.jsx";
import {GithubLoginButton} from "../common/Buttons/GithubLoginButton.jsx";
import axios from "axios";
import {getCookie} from "../../services/cookie.js";

export function LoginButton() {
  const onTest = async () => {
    const accessToken = getCookie("accessToken");

    const response = await axios.get(`${import.meta.env.VITE_WAS_URL}/api/chatbots`, {
      withCredentials: true,
      headers: {
        'Authorization': `${accessToken}`
      }
    });
    console.log(response.data);
  }

  return (
    <div className={styles.block}>
      <KakaoLoginButton/>
      <GithubLoginButton/>
      <button onClick={onTest}>테스트용 버튼</button>
    </div>
  )
}