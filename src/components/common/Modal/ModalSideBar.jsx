import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./modalSideBar.module.css";
import LogoImg from "../../../assets/bambooForestLogo.png";
import {ModalBackground} from "./ModalBackground.jsx";
import {AvailableBot} from "../SideBar/AvailableBot.jsx";

export function ModalSideBar({ open, onToggleSideBar }) {
  return (
    <>
      <ModalBackground open={open} />
      <div className={!open ? styles.block : open === '_true' ? styles.block_true : styles.block_false}>
        <div className={styles.arrowBlock}>
          <KeyboardDoubleArrowLeftIcon
            className={styles.arrow}
            style={{fontSize: "36px"}}
            onClick={onToggleSideBar}
          />
        </div>
        <div>
          <div className={styles.logo} style={{textAlign: 'center'}}>
            <img src={LogoImg} alt='logo' style={{width: '84px', height: "84px"}}/>
          </div>
          <p className={styles.title}>사용 가능한 상담봇</p>
          <div className={styles.content}>
            <AvailableBot/>
            <AvailableBot/>
            <AvailableBot/>
            <AvailableBot/>
            <AvailableBot/>
          </div>
        </div>
      </div>
    </>
  )
}