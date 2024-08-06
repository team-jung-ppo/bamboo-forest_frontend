import React, { useState, useEffect } from 'react';
import styles from './batteries.module.css';
import { useGetUserBattery } from '../../../hooks/battery/useGetUserBattery';

export function Batteries() {
	const userBattery = useGetUserBattery();

	return (
		<>
			<div className={styles.batteriesInfo}>
				<div className={styles.batteriesCnt}>
					🔋{userBattery}
				</div>
			</div>
		</>
	);
}
