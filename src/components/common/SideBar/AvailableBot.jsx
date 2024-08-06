import styles from './availableBt.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useNavigate} from "react-router-dom";
import {getCookie} from "../../../services/cookie.js";
import axios from "axios";

export function AvailableBot({ id, name, url, description, imageUrl, price }) {
  const navigate = useNavigate();

  const openChatting = () => {
    const accessToken = getCookie('accessToken');
    const createRoom = async () => {
      const res = await axios.post(`${import.meta.env.VITE_WAS_URL}/api/chats/room`, {
        chatBotName: name,
      }, {
        withCredentials: true,
        headers: {
          Authorization: `${accessToken}`,
        }
      });
      navigate(`/chatting?name=${name}`, {
        state: { ...res.data, imageUrl: imageUrl }
      });
      window.location.reload();
    }
    createRoom();
  }

  return (
    <div className={styles.block} onClick={openChatting}>
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