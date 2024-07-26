import styles from './buyChatbot.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import ChatBotComponent from '../common/ChatBot/ChatBotComponent';
import { Batteries } from '../common/Batteries/Batteries';

function BuyChatbot() {
	const chatbotData = [];
	useEffect(() => {
		axios.get('https://54.180.99.46:8080/api/chatbots').then((responce) => {
			chatbotData.push(...responce);
		});
	});
	return (
		<div className={styles.container}>
			<div id={styles.buybattery}>
				<div className={styles.batteriesContainer}>
					<Batteries />
				</div>
				<div className={styles.logoandtxt}>
					<img src="src/assets/bambooForestLogo.png" alt="" />
					<h3>구매할 챗봇을 선택하세요.</h3>
				</div>
				<div className={styles.buychatbotlist}>
					{chatbotData.map((data, index) => (
						<ChatBotComponent
							imgUrl={data.imgUrl}
							name={data.name}
							description={data.description}
							cost={'1000'}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default BuyChatbot;
