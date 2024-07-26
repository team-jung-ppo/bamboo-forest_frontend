import {Logo} from "../common/Logo/Logo.jsx";
import {About} from "../common/About/About.jsx";
import {LoginButton} from "./LoginButton.jsx";
import styles from "./loginPage.module.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function Loginpage() {
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  return (
    <div className={styles.block}>
      <Logo />
      <About />
      <LoginButton />
    </div>
  )
}