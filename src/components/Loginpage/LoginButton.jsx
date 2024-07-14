import styles from "./loginButton.module.css";
import { LoginBtn } from "../../consts/LoginBtn";

export function LoginButton() {
  return (
    <div className={styles.block}>
      {LoginBtn.map((btn) => (
        <button className={styles.btn} style={{backgroundColor: btn.backgroundColor, color: btn.fontColor}}>
          <div className={styles.btnBlock}>
            <div className={styles.imageBlock}>
              <img style={{width: "18px"}} src={btn.symbol} alt="symbol"/>
            </div>
            <label className={styles.labelBlock}>{btn.text}</label>
          </div>
        </button>
        )
      )}
    </div>
  )
}