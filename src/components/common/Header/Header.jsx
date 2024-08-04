import styles from './header.module.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getCookie, setCookie} from '../../../services/cookie';
import { useState } from 'react';
import { Batteries } from '../Batteries/Batteries';

function Header() {
	const [userinfo, setUserinfo] = useState([]);
	const fetchUserInfo = async () => {
		try {
			const accessToken = getCookie('accessToken');
			const response = await axios.get(
				`${import.meta.env.VITE_WAS_URL}/api/members/profile`,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			const userData = response.data;
			setUserinfo(userData);
		} catch (error) {
			if (error.response && error.response.data.code === 'E003') {
				try {
					const refreshToken = getCookie('refreshToken');
					const res = await axios.post(`${import.meta.env.VITE_WAS_URL}/api/members/reissuance`, null, {
						withCredentials: true,
						headers: {
							'Authorization': `Bearer ${refreshToken}`
						}
					});
					const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;
					setCookie('accessToken', newAccessToken);
					setCookie('refreshToken', newRefreshToken);
					fetchUserInfo();
					return;
				} catch (reissuanceError) {
					console.error("Error reissuing token", reissuanceError);
				}
			}
			if (axios.isAxiosError(error)) {
				console.error('Axios error:', error.response?.data || error.message);
			} else {
				console.error('Unknown error:', error);
			}
		}
	};

	useEffect(() => {
		fetchUserInfo();
	}, []);

	return (
		<div className={styles.header}>
			<Link to="/">
				<div className={styles.profile}>
					<img
						className={styles.profileImg}
						src="src/assets/bambooForestLogo.png"
						alt="profile"
					/>
					<div className={styles.profileInfo}>
						<h3>대나무숲</h3>
					</div>
				</div>
			</Link>

			<div className={styles.rightHeader}>
				<Link to="/paybattery">
					<div className={styles.buyBattery}>
						<div className={styles.buyBatteryTxt}>Buy Battery</div>
						<div className={styles.buyBatteryIcon}>
							<BoltOutlinedIcon />
						</div>
					</div>
				</Link>

				<Link to="/buychatbot">
					<div className={styles.buyChatbot}>
						<div className={styles.buyChatbotTxt}>Buy ChatBot</div>
						<div className={styles.buyChatbotIcon}>
							<LinkOutlinedIcon />
						</div>
					</div>
				</Link>

				<div className={styles.batteryInfo}>
					<Batteries />
				</div>
			</div>
		</div>
	);
}

export default Header;
