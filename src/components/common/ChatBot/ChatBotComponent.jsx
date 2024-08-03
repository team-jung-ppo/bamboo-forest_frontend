import styles from './chatbotcomponent.module.css';
import { useNavigate } from 'react-router-dom';

function ChatBotComponent(props) {
	const navigate = useNavigate();
	const navigateBuyPage = () => {};
	return (
		<div className={styles.container}>
			<div className={styles.imgBox}>
				<img className={styles.img} src={props.imgUrl} alt="" />
			</div>
			<div className={styles.info}>
				<div className={styles.name}>{props.name}</div>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.cost}>🔋 {props.cost} 개</div>
			</div>
		</div>
	);
}

export default ChatBotComponent;
