import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./sideBar.module.css";
import LogoImg from "../../../assets/bambooForestLogo.png";
import {AvailableBot} from "./AvailableBot.jsx";

export function SideBar({ open, onToggleSideBar }) {
  return (
    <div className={!open ? styles.block : open === '_true' ? styles.block_true : styles.block_false}>
      <div className={styles.arrowBlock}>
        <KeyboardDoubleArrowLeftIcon
          className={styles.arrow}
          style={{ fontSize: "36px" }}
          onClick={onToggleSideBar}
        />
      </div>
      <div>
        <div style={{ textAlign: 'center' }}>
          <img src={LogoImg} alt='logo' style={{ width: '84px' }} />
        </div>
        <div>
          <p className={styles.title}>사용 가능한 상담봇</p>
          <div>
            <AvailableBot />
          </div>
        </div>
      </div>
    </div>
  )
}