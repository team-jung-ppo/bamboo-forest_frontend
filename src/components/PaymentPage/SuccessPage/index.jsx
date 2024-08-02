import {useNavigation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import styles from './successPage.module.css';
import {CircleCheckIcon} from "./CirculeCheckIcon.jsx";

export function SuccessPage() {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const requestData ={
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    }

    async function confirm() {
      const response = await fetch("/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // 결제 실패 비즈니스 로직

        navigate(`fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // 결제 성공 비즈니스 로직

    }
    confirm();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <CircleCheckIcon className={styles.icon}/>
          <h2 className={styles.title}>결제가 완료되었습니다!</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <span className={styles.label}>주문 번호</span>
              <span>{searchParams.get("orderId")}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>상품명</span>
              <span>Glimmer Lamps x 2, Aqua Filters x 1</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>결제 금액</span>
              <span className={styles.amount}>{searchParams.get("amount")}</span>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <button className={styles.button}>확인</button>
      </div>
    </div>
  )
}