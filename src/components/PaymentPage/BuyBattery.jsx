import styles from './buyBattery.module.css';
import BuyBatteryComponent from './BuyBatteryComponent.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {getCookie, setCookie} from '../../services/cookie';
import { MyBatteryInfo } from './MyBatteryInfo.jsx';
import { options } from '../../constants/payBatteryOptions.js';
import {useGetBuyBatteryList} from "../../hooks/battery/useGetBuyBatteryList.js";
import {BuyList} from "./BuyList.jsx";


function BuyBattery() {
	const [buyBatteryList, setBuyBatteryList] = useState([]);
	const [selectOption, setSelectOption] = useState('배터리충전');
	const buyList = useGetBuyBatteryList();

	const fetchBatteryData = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.get(
				`${import.meta.env.VITE_WAS_URL}/api/batteries`,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			setBuyBatteryList(userData);
		} catch (error) {
			if (error.response && error.response.data.code === 'E003') {
				try {
					const refreshToken = getCookie('refreshToken');
					const res = await axios.post(`${import.meta.env.VITE_WAS_URL}/api/members/reissuance`, null, {
						withCredentials: true,
						headers: {
							'Authorization': `Bearer ${refreshToken}`
						}
					});
					const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;
					setCookie('accessToken', newAccessToken);
					setCookie('refreshToken', newRefreshToken);
					fetchBatteryData();
					return;
				} catch (reissuanceError) {
					console.error("Error reissuing token", reissuanceError);
				}
			}
			if (axios.isAxiosError(error)) {
				console.error('Axios error:', error.response?.data || e.message);
			} else {
				console.error('Unknown error:', error);
			}
		}
	};
	useEffect(() => {
		fetchBatteryData();
	}, []);
	return (
		<div className={styles.buyBattery}>
			<MyBatteryInfo />
			<div className={styles.contentBlock}>
				<div className={styles.options}>
					{options.map((item) => (
						<h3
							className={styles.option}
							style={{ color: selectOption === item.text ? '#43655a' : null }}
							key={item.id}
							onClick={() => setSelectOption(item.text)}
						>
							{item.text}
						</h3>
					))}
				</div>
				<div className={styles.aboutBattery}>
					<div
						className={styles.aboutTitle}
					>
						배터리란?
					</div>
					<div className={styles.aboutContent}>
						챗봇을 구매하기 위해 필요한 전용 결제 수단입니다.
					</div>
				</div>
				{selectOption === options[0].text && (
					<div className={styles.buyBatteryList}>
						<div className={styles.listTitle}>쿠키 패키지</div>
						<div className={styles.listContent}>
							{buyBatteryList.map((data, index) => (
								<BuyBatteryComponent
									key={index}
									name={data.name}
									batteryNum={data.count}
									cost={data.price}
								/>
							))}
						</div>
					</div>
				)}
				{selectOption === options[1].text && (
					<div className={styles.buyBatteryList}>
						<div className={styles.listTitle}>충전내역</div>
						<div className={styles.buyListContent}>
							{buyList.map((item, index) => (
								<BuyList key={item.id} style={index === buyList.length - 1 ? 'none' : '1px solid #d1d5db'} name={item.batteryItem.name} price={item.batteryItem.price} count={item.batteryItem.count} amount={item.amount} provider={item.provider} createdAt={item.createdAt} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default BuyBattery;
