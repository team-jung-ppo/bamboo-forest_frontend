import styles from './header.module.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie, removeCookie, setCookie } from '../../../services/cookie';
import { useState } from 'react';
import { Batteries } from '../Batteries/Batteries';
import Logo from '../../../assets/bambooForestLogo.png';

function Header() {
	const [userinfo, setUserinfo] = useState([]);
	const accessToken = getCookie('accessToken');
	const navigate = useNavigate();

	const onGoMainPage = () => {
		navigate('/');
		window.location.reload();
	};

	return (
		<div className={styles.header}>
			<div className={styles.profile} onClick={onGoMainPage}>
				<img className={styles.profileImg} src={Logo} alt="profile" />
				<div className={styles.profileInfo}>
					<h3>대나무숲</h3>
				</div>
			</div>
			<div className={styles.rightHeader}>
				<Link to="/paybattery">
					<div className={styles.buyBattery}>
						<div className={styles.buyBatteryTxt}>배터리 상점</div>
						<div className={styles.buyBatteryIcon}>
							<BoltOutlinedIcon />
						</div>
					</div>
				</Link>
				<Link to="/buychatbot">
					<div className={styles.buyChatbot}>
						<div className={styles.buyChatbotTxt}>챗봇 상점</div>
						<div className={styles.buyChatbotIcon}>
							<LinkOutlinedIcon />
						</div>
					</div>
				</Link>
				{accessToken && (
					<div className={styles.batteryInfo}>
						<Batteries />
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
