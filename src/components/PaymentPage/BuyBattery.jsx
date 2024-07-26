import styles from './buyBattery.module.css';
import { Batteries } from '../common/Batteries/Batteries';
import BuyBatteryComponent from '../common/Batteries/BuyBatteryComponent';
import Header from '../MainPage/Header';

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
				{buyBatteryData.map((data, index) => (
					<BuyBatteryComponent
						key={index}
						batterynum={data.batterynum}
						cost={data.cost}
					/>
				))}
			</div>
		</div>
	);
}

export default BuyBattery;
