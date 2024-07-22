import './Header.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

function Header() {
	return (
		<div className="header">
			<img
				className="profileImg"
				src="src/assets/bambooForestLogo.png"
				alt=""
			/>
			<div className="profileInfo">
				<h3>아저씨</h3>
				<span>Activate 35,000 people</span>
			</div>

			<div className="rightHeader">
				<span className="buyBattery">
					Buy Battery
					<BoltOutlinedIcon />
				</span>
				<span className="help">
					Help
					<HelpOutlineOutlinedIcon />
				</span>
				<span className="buyChatbot">
					Buy ChatBot
					<LinkOutlinedIcon />
				</span>
				<span>Greg Gregor</span>
			</div>
		</div>
	);
}

export default Header;
