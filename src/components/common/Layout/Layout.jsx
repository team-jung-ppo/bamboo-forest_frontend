import {SideBar} from "../SideBar/SideBar.jsx";
import styles from "./layout.module.css";
import {ModalSideBar} from "../SideBar/ModalSideBar.jsx";
import {useState} from "react";
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight.js';

export function Layout() {
  const [open, setOpen] = useState('');

  const onToggleSideBar = () => {
    if (open === '_false' || !open) {
      setOpen('_true');
    } else if (open === '_true') {
      setOpen('_false');
    }
  };

  return (
    <div className={styles.block}>
      <SideBar open={open} onToggleSideBar={onToggleSideBar} />
      <div className={styles.isModal}>
        <ModalSideBar open={open} onToggleSideBar={onToggleSideBar} />
      </div>
      <div
        style={{
          width: `${open === '_true' ? '0px' : '50px'}`,
          height: '100vh',
          borderRight: `${open === '_true' ? null : '1px solid #D1D5DB'}`,
        }}
      >
        {open === '_false' || !open ? (
          <KeyboardDoubleArrowRightIcon
            className={styles.arrow}
            style={{ fontSize: '36px', marginLeft: '10px' }}
            onClick={onToggleSideBar}
          />
        ) : null}
      </div>
      <div className={styles.rightSection}>
        <div className={styles.topContainer}>
          <Header/>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}