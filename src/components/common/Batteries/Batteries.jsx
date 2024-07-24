import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './batteries.module.css';

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
			<div className={styles.batteriesInfo}>
				<div className={styles.batteriesCnt}>
					🔋 현재 보유한 건전지 {battery}개
				</div>
				<button className={styles.chargeBtn}>건전지 충전하기</button>
			</div>
		</>
	);
}
