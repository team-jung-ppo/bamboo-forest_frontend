import styles from './buyBattery.module.css';
import { Batteries } from '../common/Batteries/Batteries';
import BuyBatteryComponent from '../common/Batteries/BuyBatteryComponent';
import Header from '../common/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCookie } from '../../services/cookie';
import { MyBatteryInfo } from './MyBatteryInfo.jsx';

const buyBatteryData = [
	{
		batterynum: '50',
		cost: '1,000',
	},
	{
		batterynum: '100',
		cost: '1,700',
	},
	{
		batterynum: '2,500',
		cost: '2,500',
	},
];

const options = [
	{
		id: 1,
		text: '배터리충전',
	},
	{
		id: 2,
		text: '충전내역',
	},
];

function BuyBattery() {
	const [buyBatteryList, setBuyBatteryList] = useState([]);
	const [selectOption, setSelectOption] = useState('배터리충전');

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
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};
	useEffect(() => {
		fetchBatteryData();
	}, []);
	return (
		<div id={styles.buybattery}>
			<div className={styles.topContainer}>
				<Header />
			</div>
			<MyBatteryInfo />
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
			<hr />
			<div className={styles.aboutBattery}>
				<div
					className={styles.aboutTitle}
					style={{ fontSize: '20px', fontWeight: '700' }}
				>
					배터리란?
				</div>
				<div className={styles.aboutContent}>
					챗봇을 구매하기 위해 필요한 전용 결제 수단입니다.
				</div>
			</div>

			{selectOption === options[0].text && (
				<div className={styles.buybatterylist}>
					<div className={styles.listTitle}>쿠키 패키지</div>
					<div className={styles.listContent}>
						{buyBatteryList.map((data, index) => (
							<BuyBatteryComponent
								key={index}
								name={data.name}
								batterynum={data.count}
								cost={data.price}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default BuyBattery;
