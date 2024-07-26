import styles from "../../Loginpage/loginButton.module.css";
import KakaoSymbol from "../../../assets/kakaoLoginSymbol.png"

export function KakaoLoginButton() {
  return (
    <form name="kakaoLogin" action={`${import.meta.env.VITE_WAS_URL}/oauth2/authorization/kakao?redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`} method="POST">
      <button
        className={styles.btn}
        style={{backgroundColor: "#FEE500", color: 'black'}}
        type="submit"
      >
        <div className={styles.btnBlock}>
          <div className={styles.imageBlock}>
            <img style={{width: "18px", height: "18px"}} src={KakaoSymbol} alt="kakao"/>
          </div>
          <label className={styles.labelBlock}>카카오 로그인</label>
        </div>
      </button>
    </form>
  )
}