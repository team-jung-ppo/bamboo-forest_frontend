import { Batteries } from '../common/Batteries/Batteries';
import Header from '../common/Header/Header';
import styles from './userinfo.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../services/cookie';
import PayedListComponent from '../common/PayedList/PayedListComponent';
import MyChatBotList from '../common/PayedList/MyChatBotList';
import ChatBotPayedList from '../common/PayedList/ChatBotPayedList';

function UserInfo() {
	const [userinfo, setUserinfo] = useState([]);
	const [payedBatteryInfo, setPayedBatteryInfo] = useState([]);
	const [payedChatbotInfo, setPayedChatbotInfo] = useState([]);

	const dummyUserInfo = {
		id: 1,
		username: '송제용',
		profileImage:
			'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
		role: 'ROLE_USER',
		batteryCount: 0,
		chatBots: [
			{
				name: '아저씨 챗봇',
				url: 'http://example.com/uncle',
				description: '아저씨와 대화를 나눌 수 있는 챗봇입니다.',
				imageUrl: 'http://example.com/images/uncle.png',
			},
			{
				name: '아줌마 챗봇',
				url: 'http://example.com/aunt',
				description: '아줌마와 대화를 나눌 수 있는 챗봇입니다.',
				imageUrl: 'http://example.com/images/aunt.png',
			},
			{
				name: '어린이 챗봇',
				url: 'http://example.com/child',
				description: '어린이와 대화를 나눌 수 있는 챗봇입니다.',
				imageUrl: 'http://example.com/images/child.png',
			},
		],
		createdAt: '2024-07-17T05:05:14',
		oauth2: 'OAUTH2_KAKAO',
	};

	const dummyPayedBatteryInfo = [
		{
			id: '68e54550-d29d-465a-a979-78b4fa62f93c',
			batteryItem: {
				name: '중간 배터리',
				price: 5000,
				count: 5,
			},
			provider: '토스페이',
			amount: 5000,
			createdAt: '2024-07-22T13:50:38',
		},
		{
			id: '68e54550-d29d-465a-a979-78b4fa62f93c',
			batteryItem: {
				name: '중간 배터리',
				price: 5000,
				count: 5,
			},
			provider: '토스페이',
			amount: 5000,
			createdAt: '2024-07-22T13:50:38',
		},
		{
			id: '68e54550-d29d-465a-a979-78b4fa62f93c',
			batteryItem: {
				name: '중간 배터리',
				price: 5000,
				count: 5,
			},
			provider: '토스페이',
			amount: 5000,
			createdAt: '2024-07-22T13:50:38',
		},
	];

	const dummyPayedChatBotInfo = [
		{
			id: 3,
			amount: 3,
			chatBotItem: {
				name: '아줌마 챗봇',
				url: 'http://example.com/aunt',
				description: '아줌마와 대화를 나눌 수 있는 챗봇입니다.',
				imageUrl: 'http://example.com/images/aunt.png',
				price: 3,
			},
			createdAt: '2024-07-22T14:28:30',
		},
		{
			id: 2,
			amount: 0,
			chatBotItem: {
				name: '아저씨 챗봇',
				url: 'http://example.com/uncle',
				description: '아저씨와 대화를 나눌 수 있는 챗봇입니다.',
				imageUrl: 'http://example.com/images/uncle.png',
				price: 0,
			},
			createdAt: '2024-07-22T14:28:26',
		},
		{
			id: 1,
			amount: 5,
			chatBotItem: {
				name: '어린이 챗봇',
				url: 'http://example.com/child',
				description: '어린이와 대화를 나눌 수 있는 챗봇입니다.',
				imageUrl: 'http://example.com/images/child.png',
				price: 5,
			},
			createdAt: '2024-07-22T14:26:14',
		},
	];

	const fetchUserInfo = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.get(
				`${import.meta.env.VITE_WAS_URL}/api/members/profile`,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			setUserinfo(userData);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};

	const fetchPayedBatteryInfo = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.get(
				`${import.meta.env.VITE_WAS_URL}/api/payments`,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			setPayedBatteryInfo(userData);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};

	const fetchPayedChatbotInfo = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.get(
				`${import.meta.env.VITE_WAS_URL}/api/chatbots/purchases`,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			setPayedChatbotInfo(userData);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};

	useEffect(() => {
		fetchUserInfo();
		fetchPayedBatteryInfo();
		fetchPayedChatbotInfo();
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.topcontainer}>
				<Header />
			</div>
			<div className={styles.name}>{userinfo.username} 님 환영합니다!</div>
			<div className={styles.batteryInfo}>
				<div className={styles.batteryPayedListLabel}>배터리 구매내역</div>
				<div className={styles.batteryPayedList}>
					{dummyPayedBatteryInfo.map((data, index) => (
						<PayedListComponent
							key={index}
							productName={data.batteryItem.name}
							cost={data.batteryItem.price}
							count={data.batteryItem.count}
							payments={data.provider}
							payedAt={data.createdAt}
						/>
					))}
				</div>
			</div>
			<div className={styles.chatbotInfoBox}>
				<div className={styles.chatbotInfo}>
					<div className={styles.chatbotInfoLable}>소유한 챗봇 정보</div>
					<div className={styles.chatbotInfoList}>
						{dummyUserInfo.chatBots.map((data, index) => (
							<MyChatBotList
								key={index}
								name={data.name}
								description={data.description}
								imgUrl={data.imageUrl}
							/>
						))}
					</div>
				</div>
				<div className={styles.chatBotPayedInfo}>
					<div className={styles.chatBotPayedLabel}>챗봇 구매내역</div>
					<div className={styles.chatBotPayedList}>
						{dummyPayedChatBotInfo.map((data, index) => (
							<ChatBotPayedList
								name={data.chatBotItem.name}
								description={data.chatBotItem.description}
								imgUrl={data.chatBotItem.imageUrl}
								amount={data.amount}
								price={data.chatBotItem.price}
								payedAt={data.createdAt}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserInfo;
