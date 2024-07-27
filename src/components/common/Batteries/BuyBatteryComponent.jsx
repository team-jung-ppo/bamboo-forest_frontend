import styles from './buyBatteryComponent.module.css';

function BuyBatteryComponent(props) {
	return (
		<div className={styles.batteryComponent}>
			<div className={styles.batteryIcon}>🔋</div>
			<div className={styles.title}>{props.name}</div>
			<div className={styles.numOfBattery}>{props.batterynum} 개</div>
			<div className={styles.costOfBattery}>{props.cost} 원</div>
			<button className={styles.selectBtn}>선택하기</button>
		</div>
	);
}

export default BuyBatteryComponent;
