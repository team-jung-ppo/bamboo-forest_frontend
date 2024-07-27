import { Batteries } from '../common/Batteries/Batteries';
import Header from '../common/Header/Header';
import styles from './userinfo.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../services/cookie';
import PayedListComponent from '../common/PayedList/PayedListComponent';

function UserInfo() {
	const [userinfo, setUserinfo] = useState([]);
	const [payedBatteryInfo, setPayedBatteryInfo] = useState([]);

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

	useEffect(() => {
		fetchUserInfo();
		fetchPayedBatteryInfo();
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.topcontainer}>
				<Header />
			</div>
			<div className={styles.name}>{userinfo.username} 님 환영합니다!</div>
			<div className={styles.batteryInfo}>
				<h2>배터리 결제내역</h2>
				{payedBatteryInfo.map((data, index) => (
					<PayedListComponent
						key={index}
						productName={data.batteryItem.name}
						cost={data.batteryItem.price}
						count={data.batteryInfo.count}
						payments={data.provider}
						payedAt={data.createdAt}
					/>
				))}
				{/* <PayedListComponent /> */}
			</div>
			<div className={styles.chatbotInfo}>
				<h2>챗봇 정보</h2>
				<h2>챗봇 구매내역</h2>
			</div>
		</div>
	);
}

export default UserInfo;
