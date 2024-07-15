import {SideBar} from "../common/SideBar/SideBar.jsx";
import styles from "./chatting.module.css";
import {useState} from "react";

export function ChattingPage() {
  const [open, setOpen] = useState('');

  const onToggleSideBar = () => {
    if (open === '_false') {
      setOpen('_true');
    } else if (open === '_true' || !open) {
      setOpen('_false');
    }
  }

  return (
    <div className={styles.block}>
      <SideBar open={open} onToggleSideBar={onToggleSideBar} />
      <div style={{ width: `${open === '_true' || !open ? "10px" : "40px"}` }} />
      <div>
        하이하이
      </div>
    </div>
  )
}