import {SideBar} from "../common/SideBar/SideBar.jsx";
import styles from "./chatting.module.css";
import {useState} from "react";

export function ChattingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.block}>
      <SideBar open={open} setOpen={setOpen} />
      <div style={{ width: `${open ? "10px" : "40px"}` }} />
      <div>
        하이하이
      </div>
    </div>
  )
}