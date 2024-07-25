import styles from './header.module.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Link } from 'react-router-dom';

function Header() {
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
					<span className={styles.userInfo}>Greg Gregor</span>
				</Link>
			</div>
		</div>
	);
}

export default Header;
