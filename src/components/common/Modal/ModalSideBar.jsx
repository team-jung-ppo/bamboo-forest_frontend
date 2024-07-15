import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./modalSideBar.module.css";
import LogoImg from "../../../assets/bambooForestLogo.png";
import {ModalBackground} from "./ModalBackground.jsx";

export function ModalSideBar({ open, onToggleSideBar }) {
  return (
    <>
      <ModalBackground open={open} />
      <div className={!open ? styles.block : open === '_true' ? styles.block_true : styles.block_false}>
        <div className={styles.arrowBlock}>
          {open === '_true' || !open ?
            <KeyboardDoubleArrowLeftIcon
              className={styles.arrow}
              style={{ fontSize: "36px" }}
              onClick={onToggleSideBar}
            /> :
            <KeyboardDoubleArrowRightIcon
              className={styles.arrow}
              style={{ fontSize: "36px" }}
              onClick={onToggleSideBar}
            />
          }
        </div>
        {open === '_true' || !open ?
          <div>
            <div style={{ textAlign: 'center' }}>
              <img src={LogoImg} alt='logo' style={{ width: '84px' }} />
            </div>
            <div>
              <p>사용 가능한 상담봇</p>
              <div>

              </div>
            </div>
          </div> :
          null
        }
      </div>
    </>
  )
}