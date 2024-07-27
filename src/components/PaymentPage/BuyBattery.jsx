import styles from './buyBattery.module.css';
import { Batteries } from '../common/Batteries/Batteries';
import BuyBatteryComponent from '../common/Batteries/BuyBatteryComponent';
import Header from '../common/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCookie } from '../../services/cookie';

function BuyBattery() {
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
	const [buyBatteryList, setBuyBatteryList] = useState([]);

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
				<Batteries />
			</div>
			<div className={styles.logoandtxt}>
				<h3>추가할 배터리 수를 선택하세요.</h3>
			</div>
			<div className={styles.buybatterylist}>
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
	);
}

export default BuyBattery;
