import styles from './buyBatteryComponent.module.css';
import {useCallback} from "react";
import {usePurchaseBattery} from "../../../hooks/battery/usePurchaseBattery.js";
import {useNavigate} from "react-router-dom";

function BuyBatteryComponent({ name, batteryNum, cost}) {
	const purchaseBattery = usePurchaseBattery(name);
	const navigate = useNavigate();

	const onPurchase = useCallback(() => {
		const batteryInfo = purchaseBattery;
		navigate('/checkout', {
			state: {...batteryInfo}
		})
	}, [purchaseBattery]);

	return (
		<div className={styles.batteryComponent}>
			<div className={styles.info}>
				<div className={styles.batteryIcon}>🔋</div>
				<div className={styles.title}>{name}</div>
				<div className={styles.numOfBattery}>{batteryNum} 개</div>
			</div>
			<div className={styles.costOfBattery} onClick={onPurchase}>{cost} 원</div>
		</div>
	);
}

export default BuyBatteryComponent;
