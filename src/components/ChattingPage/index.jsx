import {SideBar} from "../common/SideBar/SideBar.jsx";
import styles from "./chatting.module.css";
import {useEffect, useRef, useState} from "react";
import {ModalSideBar} from "../common/Modal/ModalSideBar.jsx";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight.js";
import {ChattingContainer} from "./ChattingContainer.jsx";
import {useNavigate} from "react-router-dom";
import {getCookie} from "../../services/cookie.js";
import Swal from "sweetalert2";

export function ChattingPage() {
  const [open, setOpen] = useState('');
  const [isError, setIsError] = useState(false);
  const hasAccessChecked = useRef(false);

  const navigate = useNavigate();

  const onToggleSideBar = () => {
    if (open === '_false') {
      setOpen('_true');
    } else if (open === '_true' || !open) {
      setOpen('_false');
    }
  }

  useEffect(() => {
    if (hasAccessChecked.current) return;
    hasAccessChecked.current = true;

    const accessToken = getCookie("accessToken");
    if (!accessToken) {
      setIsError(true);
      Swal.fire({
        title: '로그인 후 이용가능합니다.',
        icon: 'error',
        confirmButtonText: '확인'
      }).then((result) => {
        navigate('/login');
      })
    }
  }, []);

  return (
    <div className={styles.block}>
      <SideBar open={open} onToggleSideBar={onToggleSideBar} />
      <ModalSideBar open={open} onToggleSideBar={onToggleSideBar} />
      <div style={{ width: `${open === '_true' || !open ? "10px" : "50px"}` }} >
        {open === '_false' ?
          <KeyboardDoubleArrowRightIcon
            className={styles.arrow}
            style={{ fontSize: "36px", marginLeft: "10px" }}
            onClick={onToggleSideBar}
          /> :
          null
        }
      </div>
      {!isError &&
        <div>
          <ChattingContainer message={'테스트메시지테스트메시지테스트메시지테스트메시지'}/>
        </div>
      }

    </div>
  )
}