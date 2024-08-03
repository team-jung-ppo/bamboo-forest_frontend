import styles from './buyList.module.css';
import dayjs from "dayjs";

export function BuyList({ style, name, price, count, amount, provider, createdAt }) {
  return (
    <div className={styles.block} style={{borderBottom: style}}>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.batteryIcon}>🔋</div>
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.count}>{count}개</div>
          <div className={styles.date}>{`${dayjs(createdAt).format('YYYY.MM.DD (HH:mm)')}`}</div>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.price}>{price.toLocaleString()}원</div>
        <div className={styles.provider}>{provider}</div>
      </div>
    </div>
  )
}