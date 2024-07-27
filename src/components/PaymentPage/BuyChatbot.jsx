import styles from './buyChatbot.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import ChatBotComponent from '../common/ChatBot/ChatBotComponent';
import { Batteries } from '../common/Batteries/Batteries';
import Header from '../common/Header/Header';
import { getCookie } from '../../services/cookie';
import { useState } from 'react';

function BuyChatbot() {
	const [chatbotData, setChatbotData] = useState([]);
	const fetchChatbotInfo = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.get(
				`${import.meta.env.VITE_WAS_URL}/api/chatbots`,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			setChatbotData(userData);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};

	useEffect(() => {
		fetchChatbotInfo();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.batteriesContainer}>
				<Header />
				<Batteries />
			</div>
			<div className={styles.logoandtxt}>
				<h3>구매할 챗봇을 선택하세요.</h3>
			</div>
			<div className={styles.buychatbotlist}>
				{chatbotData.map((data, index) => (
					<ChatBotComponent
						key={index}
						imgUrl={data.imgUrl}
						name={data.name}
						description={data.description}
						cost={'1000'}
					/>
				))}
			</div>
		</div>
	);
}

export default BuyChatbot;
