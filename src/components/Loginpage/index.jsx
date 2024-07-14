import {Logo} from "../common/Logo/Logo.jsx";
import {About} from "../common/About/About.jsx";
import {LoginButton} from "./LoginButton.jsx";
import styles from "./loginPage.module.css";

export function Loginpage() {
  return (
    <div className={styles.block}>
      <Logo />
      <About />
      <LoginButton />
    </div>
  )
}