import styles from './chatbotcomponent.module.css';
import axios from 'axios';
import { getCookie } from '../../../services/cookie';

function ChatBotComponent(props) {
	const postChatBot = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.post(
				`${import.meta.env.VITE_WAS_URL}/api/chatbots/purchase`,
				{
					chatBotItemName: props.name,
				},
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			console.log(userData);
			alert("정상적으로 구매 완료되었습니다.");
			window.location.reload();
		} catch (e) {
			if (e.response?.data.code === 'E016') {
				alert('이미 소유한 챗봇입니다.');
			}
			if (e.response?.data.code === 'E011') {
				alert('배터리가 부족합니다.');
			}
			if (e.response?.data.code === 'E019') {
				alert('현재 구매가 불가능한 챗봇입니다.');
			}
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};

	return (
		<div className={styles.container} onClick={postChatBot}>
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
