import styles from './header.module.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../../services/cookie';
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
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.error('Axios error:', e.response?.data || e.message);
			} else {
				console.error('Unknown error:', e);
			}
		}
	};

	useEffect(() => {
		fetchUserInfo();
	}, []);

	return (
		<div className={styles.header}>
			<div className={styles.profile}>
				<img
					className={styles.profileImg}
					src="src/assets/bambooForestLogo.png"
					alt=""
				/>
				<div className={styles.profileInfo}>
					<h3>아저씨</h3>
					<span>Activate 35,000 people</span>
				</div>
			</div>

			<div className={styles.rightHeader}>
				<Link to="/paybattery">
					<span className={styles.buyBattery}>
						Buy Battery
						<BoltOutlinedIcon />
					</span>
				</Link>
				<Link to="/help">
					<span className={styles.help}>
						Help
						<HelpOutlineOutlinedIcon />
					</span>
				</Link>
				<Link to="/buychatbot">
					<span className={styles.buyChatbot}>
						Buy ChatBot
						<LinkOutlinedIcon />
					</span>
				</Link>
				<Link to="/userInfo">
					<span className={styles.userInfo}>{userinfo.username}</span>
				</Link>
				<Batteries />
			</div>
		</div>
	);
}

export default Header;
