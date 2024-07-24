import styles from './header.module.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

function Header() {
	return (
		<div className={styles.header}>
			<img
				className={styles.profileImg}
				src="src/assets/bambooForestLogo.png"
				alt=""
			/>
			<div className={styles.profileInfo}>
				<h3>아저씨</h3>
				<span>Activate 35,000 people</span>
			</div>

			<div className={styles.rightHeader}>
				<span className={styles.buyBattery}>
					Buy Battery
					<BoltOutlinedIcon />
				</span>
				<span className={styles.help}>
					Help
					<HelpOutlineOutlinedIcon />
				</span>
				<span className={styles.buyChatbot}>
					Buy ChatBot
					<LinkOutlinedIcon />
				</span>
				<span>Greg Gregor</span>
			</div>
		</div>
	);
}

export default Header;
