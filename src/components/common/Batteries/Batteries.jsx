import React, { useState, useEffect } from 'react';
import styles from './batteries.module.css';
import axios from 'axios';
import { getCookie } from '../../../services/cookie';
import { useGetUserBattery } from '../../../hooks/battery/useGetUserBattery';

export function Batteries() {
	const userBattery = useGetUserBattery();

	return (
		<>
			<div className={styles.batteriesInfo}>
				<div className={styles.batteriesCnt}>
					🔋 현재 보유한 건전지 {userBattery}개
				</div>
			</div>
		</>
	);
}
