import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./modalSideBar.module.css";
import LogoImg from "../../../assets/bambooForestLogo.png";
import {ModalBackground} from "../Modal/ModalBackground.jsx";
import {AvailableBot} from "./AvailableBot.jsx";
import {usePurchaseChatbots} from "../../../hooks/purchaseChatbots/usePurchaseChatbots.js";

export function ModalSideBar({ open, onToggleSideBar }) {
  const availableBots = usePurchaseChatbots();

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
            {availableBots && availableBots.map((bot, id) => (
              <AvailableBot key={id} id={id} name={bot.chatBotItem.name} url={bot.chatBotItem.url} description={bot.chatBotItem.description} imageUrl={bot.chatBotItem.imageUrl} price={bot.chatBotItem.price} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}