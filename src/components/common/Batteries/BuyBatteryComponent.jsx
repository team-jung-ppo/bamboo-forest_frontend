import './BuyBatteryComponent.css';

function BuyBatteryComponent(props) {
	return (
		<div className="batteryComponent">
			<div className="batteryIcon">🔋</div>
			<div className="numOfBattery">{props.batterynum} 건전지</div>
			<div className="costOfBattery">{props.cost} 원</div>
			<button className="selectBtn">선택하기</button>
		</div>
	);
}

export default BuyBatteryComponent;
