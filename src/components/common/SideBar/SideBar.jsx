import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./sideBar.module.css";
import {useState} from "react";

export function SideBar({ open, setOpen }) {
  return (
    <div className={open ? styles.block : styles.nonBlock}>
      <div className={styles.arrowBlock}>
        {open ?
          <KeyboardDoubleArrowLeftIcon
            className={styles.arrow}
            style={{ fontSize: "36px" }}
            onClick={() => setOpen(!open)}
          /> :
          <KeyboardDoubleArrowRightIcon
            className={styles.arrow}
            style={{ fontSize: "36px" }}
            onClick={() => setOpen(!open)}
          />
        }
      </div>
    </div>
  )
}