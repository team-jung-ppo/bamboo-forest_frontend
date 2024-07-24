import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Batteries.css';

export function Batteries() {
	const [battery, setBattery] = useState(0);

	useEffect(() => {
		axios
			.get('https://54.180.99.46:8080/api/members/profile')
			.then((responce) => {
				setBattery(responce.batteryCount);
			});
	});
	return (
		<>
			<div className="batteriesInfo">
				<div className="batteriesCnt">🔋 현재 보유한 건전지 {battery}개</div>
				<button className="chargeBtn">건전지 충전하기</button>
			</div>
		</>
	);
}
