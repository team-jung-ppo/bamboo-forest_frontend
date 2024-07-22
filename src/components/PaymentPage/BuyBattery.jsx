import './BuyBattery.css';
import { Batteries } from '../common/Batteries/Batteries';
import BuyBatteryComponent from '../common/Batteries/BuyBatteryComponent';

function BuyBattery() {
	return (
		<div id="buybattery">
			<div className="batteries-container">
				<Batteries />
			</div>
			<div className="logoandtxt">
				<img src="src/assets/bambooForestLogo.png" alt="" />
				<h3>추가할 배터리 수를 선택하세요.</h3>
			</div>
			<div className="buybatterylist">
				<BuyBatteryComponent batterynum="50" cost="1,000" />
				<BuyBatteryComponent batterynum="100" cost="1,700" />
				<BuyBatteryComponent batterynum="150" cost="2,500" />
			</div>
		</div>
	);
}

export default BuyBattery;
