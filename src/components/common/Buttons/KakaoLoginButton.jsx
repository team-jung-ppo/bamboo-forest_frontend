import styles from "../../Loginpage/loginButton.module.css";
import KakaoSymbol from "../../../assets/kakaoLoginSymbol.png"

export function KakaoLoginButton() {
  return (
    <form name="kakaoLogin" action={`${import.meta.env.VITE_WAS_URL}/oauth2/authorization/kakao?redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`} method="POST">
      <button
        className={styles.kakaoBtn}
        type="submit"
      >
        <div className={styles.btnBlock}>
          <div className={styles.imageBlock}>
            <img style={{width: "18px", height: "18px", padding: "0"}} src={KakaoSymbol} alt="kakao"/>
          </div>
          <label className={styles.labelBlock}>카카오 로그인</label>
        </div>
      </button>
    </form>
  )
}