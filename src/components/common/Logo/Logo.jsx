import LogoImg from "../../../assets/bambooForestLogo.png";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoImg} alt="Logo" />
    </div>
  )
}