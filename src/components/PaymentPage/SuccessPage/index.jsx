import { useState } from "react";
import {Link, useSearchParams} from "react-router-dom";
import {getCookie} from "../../../services/cookie.js";
import styles from './successPage.module.css';

export function SuccessPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");

  async function confirmPayment() {
    // TODO: API를 호출해서 서버에게 paymentKey, orderId, amount를 넘겨주세요.
    // 서버에선 해당 데이터를 가지고 승인 API를 호출하면 결제가 완료됩니다.
    // https://docs.tosspayments.com/reference#%EA%B2%B0%EC%A0%9C-%EC%8A%B9%EC%9D%B8
    const accessToken = getCookie("accessToken");
    console.log(JSON.stringify({
      amount,
      orderId,
      paymentKey
    }));
    const response = await fetch(`${import.meta.env.VITE_WAS_URL}/api/payments/confirm`, {
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify({
        amount,
        orderId,
        paymentKey
      }),
      redirect: 'follow'
    });

    if (response.ok) {
      setIsConfirmed(true);
    }
  }

  return (
    <div className={styles.wrapper}>
      {isConfirmed ? (
        <div className={`${styles.confirmSuccess}`}>
          <img
            src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
            width="120"
            height="120"
            alt="success"
          />
          <h2 className={styles.title}>결제를 완료했어요</h2>
          <div className={styles.responseSection}>
            <div className={`${styles.flex} ${styles.justifyBetween}`}>
              <span className={styles.responseLabel}>결제 금액</span>
              <span id="amount" className={styles.responseText}>
              {amount}
            </span>
            </div>
            <div className={`${styles.flex} ${styles.justifyBetween}`}>
              <span className={styles.responseLabel}>주문번호</span>
              <span id="orderId" className={styles.responseText}>
              {orderId}
            </span>
            </div>
            <div className={`${styles.flex} ${styles.justifyBetween}`}>
              <span className={styles.responseLabel}>paymentKey</span>
              <span id="paymentKey" className={styles.responseText}>
              {paymentKey}
            </span>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <div className={styles.flex} style={{gap: "16px"}}>
              <Link className={styles.btn} to={'/paybattery'} >
                돌아가기
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.confirmLoading}`}>
          <div className={styles}>
            <img
              src="https://static.toss.im/lotties/loading-spot-apng.png"
              width="120"
              height="120"
              alt="loading"
            />
          </div>
          <h2 className={`${styles.title} ${styles.textCenter}`}>결제 요청까지 성공했어요.</h2>
          <h4 className={`${styles.textCenter} ${styles.description}`}>
            결제 승인하고 완료해보세요.
          </h4>
          <div className={styles.buttonGroup}>
            <button className={styles.btn} onClick={confirmPayment}>
              결제 승인하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}