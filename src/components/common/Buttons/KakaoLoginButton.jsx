import styles from "../../Loginpage/loginButton.module.css";
import KakaoSymbol from "../../../assets/kakaoLoginSymbol.png"
import axios from "axios";

export function KakaoLoginButton() {
  const onKakaoLogin = () => {
    try {
      axios.post("http://54.180.99.46:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/redirect", null);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <button
      className={styles.btn}
      style={{backgroundColor: "#FEE500", color: 'black'}}
      onClick={onKakaoLogin}
      // onClick={() => {
      //   window.location.href = 'http://54.180.99.46:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/redirect'
      // }}
    >
      <div className={styles.btnBlock}>
        <div className={styles.imageBlock}>
          <img style={{width: "18px", height: "18px"}} src={KakaoSymbol} alt="kakao"/>
        </div>
        <label className={styles.labelBlock}>카카오 로그인</label>
      </div>
    </button>
  )
}