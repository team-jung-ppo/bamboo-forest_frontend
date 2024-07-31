import styles from './availableBt.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useNavigate} from "react-router-dom";

export function AvailableBot({ id, name, url, description, imageUrl, price }) {
  const navigate = useNavigate();

  return (
    <div className={styles.block} onClick={() => navigate()}>
      <div className={styles.check}>
        <CheckCircleIcon style={{ fontSize: "20px", color: "636363" }} />
      </div>
      <div className={styles.main}>
        <div className={styles.title}>{name}</div>
        <div className={styles.content}>{description}</div>
      </div>
    </div>
  )
}