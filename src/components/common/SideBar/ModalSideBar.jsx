import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from './modalSideBar.module.css';
import LogoImg from '../../../assets/bambooForestLogo.png';
import { ModalBackground } from '../Modal/ModalBackground.jsx';
import { AvailableBot } from './AvailableBot.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { usePurchaseChatbots } from '../../../hooks/purchaseChatbots/usePurchaseChatbots.js';
import { getCookie, removeCookie, setCookie } from '../../../services/cookie';

export function ModalSideBar({ open, onToggleSideBar }) {
	const availableBots = usePurchaseChatbots();
	const accessToken = getCookie('accessToken');
	const [userInfo, setUserInfo] = useState([]);
	const onLogout = async () => {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_WAS_URL}/api/members/logout`,
				null,
				{
					withCredentials: true,
					headers: {
						Authorization: `${accessToken}`,
					},
				},
			);
			if (res.status === 204) {
				removeCookie('accessToken');
				removeCookie('refreshToken');
				window.location.reload();
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchUserInfo = async () => {
		try {
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
			setUserInfo(userData);
		} catch (error) {
			if (error.response && error.response.data.code === 'E003') {
				try {
					const refreshToken = getCookie('refreshToken');
					const res = await axios.post(
						`${import.meta.env.VITE_WAS_URL}/api/members/reissuance`,
						null,
						{
							withCredentials: true,
							headers: {
								Authorization: `${refreshToken}`,
							},
						},
					);
					const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
						res.data;
					setCookie('accessToken', newAccessToken);
					setCookie('refreshToken', newRefreshToken);
					fetchUserInfo();
					return;
				} catch (reissuanceError) {
					console.error('Error reissuing token', reissuanceError);
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
		<>
			<ModalBackground open={open} />
			<div
				className={
					!open
						? styles.block
						: open === '_true'
						? styles.block_true
						: styles.block_false
				}
			>
				<div className={styles.arrowBlock}>
					<KeyboardDoubleArrowLeftIcon
						className={styles.arrow}
						style={{ fontSize: '36px' }}
						onClick={onToggleSideBar}
					/>
				</div>
				<div>
					<div className={styles.logo} style={{ textAlign: 'center' }}>
						<img
							src={LogoImg}
							alt="logo"
							style={{ width: '84px', height: '84px' }}
						/>
					</div>
					<p className={styles.title}>사용 가능한 상담봇</p>
					<div className={styles.content}>
						{availableBots &&
							availableBots.map((bot, id) => (
								<AvailableBot
									key={id}
									id={id}
									name={bot.chatBotItem.name}
									url={bot.chatBotItem.url}
									description={bot.chatBotItem.description}
									imageUrl={bot.chatBotItem.imageUrl}
									price={bot.chatBotItem.price}
								/>
							))}
						<div>
							<div className={styles.userProfile}>
								{!accessToken ? (
									<div className={styles.userprofile}></div>
								) : (
									<div className={styles.userprofile}>
										<img src={userInfo.profileImage} alt="profileImg" />
										<div className={styles.userName}>{userInfo.username}</div>
									</div>
								)}
							</div>
							<div className={styles.loginoutbtn}>
								{!accessToken ? (
									<div className={styles.authButton}>
										<Link to="/login">
											<button>로그인</button>
										</Link>
									</div>
								) : (
									<div className={styles.authButton}>
										<button onClick={onLogout}>로그아웃</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
