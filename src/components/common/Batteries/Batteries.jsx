import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './batteries.module.css';

export function Batteries() {
	const [battery, setBattery] = useState(0);

	const fetchBatteryNum = async () => {
		try {
			const response = await client.get('/api/members/profile');
			setBattery(response.batteryCount);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<div className={styles.batteriesInfo}>
				<div className={styles.batteriesCnt}>
					🔋 현재 보유한 건전지 {battery}개
				</div>
				<button className={styles.chargeBtn}>건전지 충전하기</button>
			</div>
		</>
	);
}
