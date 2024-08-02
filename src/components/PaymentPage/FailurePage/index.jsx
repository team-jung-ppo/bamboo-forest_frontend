import {useSearchParams} from "react-router-dom";
import styles from "./failurePage.module.css";
import {XIcon} from "./XIcon.jsx";

export function FailurePage(props) {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <XIcon className={styles.icon}/>
          <h2 className={styles.title}>결제를 실패하였습니다!</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <span className={styles.label}>주문 번호</span>
              {/*<span>{searchParams.get("orderId")}</span>*/}
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>상품명</span>
              <span>Glimmer Lamps x 2, Aqua Filters x 1</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>결제 금액</span>
              {/*<span className={styles.amount}>{searchParams.get("amount")}</span>*/}
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <button className={styles.button}>확인</button>
      </div>
    </div>
  )
}