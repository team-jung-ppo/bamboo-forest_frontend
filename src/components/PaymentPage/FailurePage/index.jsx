import {Link, useSearchParams} from "react-router-dom";
import styles from './failurePage.module.css'

export function FailPage() {
  const [searchParams] = useSearchParams();
  const errorCode = searchParams.get("code");
  const errorMessage = searchParams.get("message");

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.flexColumn} ${styles.alignCenter} ${styles.errorState}`}>
        <img
          src="https://static.toss.im/lotties/error-spot-apng.png"
          width="120"
          height="120"
          alt="error"
        />
        <h2 className={styles.title}>결제를 실패했어요</h2>
        <div className={styles.responseSection}>
          <div className={`${styles.flex} ${styles.justifyBetween}`}>
            <span className={styles.responseLabel}>code</span>
            <span id="error-code" className={styles.responseText}>
            {errorCode}
          </span>
          </div>
          <div className={`${styles.flex} ${styles.justifyBetween}`}>
            <span className={styles.responseLabel}>message</span>
            <span id="error-message" className={styles.responseText}>
            {errorMessage}
          </span>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <Link className={styles.btn} to={'/paybattery'} >
            돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}