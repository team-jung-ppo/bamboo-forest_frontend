import styles from './availableBt.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function AvailableBot() {
  return (
    <div className={styles.block}>
      <div className={styles.check}>
        <CheckCircleIcon style={{ fontSize: "20px" }} />
      </div>
      <div className={styles.main}>
        <div className={styles.title}>봇 이름</div>
        <div className={styles.content}>봇 설명</div>
      </div>
    </div>
  )
}