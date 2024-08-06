import {Logo} from "../common/Logo/Logo.jsx";
import {About} from "../common/About/About.jsx";
import {LoginButton} from "./LoginButton.jsx";
import styles from "./loginPage.module.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getCookie} from "../../services/cookie.js";

export function Loginpage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className={styles.block}>
      <div className={styles.logoBlock}>
        <Logo/>
        <About/>
      </div>
      <div className={styles.btnBlock}>
        <LoginButton/>
      </div>
    </div>
  )
}