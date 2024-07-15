import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./sideBar.module.css";
import {useState} from "react";
import {Logo} from "../Logo/Logo.jsx";

export function SideBar({ open, onToggleSideBar }) {
  return (
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
    </div>
  )
}