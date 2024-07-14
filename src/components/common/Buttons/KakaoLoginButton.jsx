import styles from "../../Loginpage/loginButton.module.css";
import KakaoSymbol from "../../../assets/kakaoLoginSymbol.png"
import {useKakaoOAuth} from "../../../hooks/auth/useKakaoOAuth.js";

export function KakaoLoginButton() {
  const { requestAuthorization } = useKakaoOAuth();

  return (
    <button
      className={styles.btn}
      style={{backgroundColor: "#FEE500", color: 'black'}}
      onClick={requestAuthorization}
    >
      <div className={styles.btnBlock}>
        <div className={styles.imageBlock}>
          <img style={{width: "18px"}} src={KakaoSymbol} alt="kakao"/>
        </div>
        <label className={styles.labelBlock}>카카오 로그인</label>
      </div>
    </button>
  )
}