import styles from './chattingContainer.module.css';
import {useEffect, useRef} from "react";

export function ChattingContainer({messages, message, imageUrl, lastIndex}) {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.block} style={{marginBottom: lastIndex ? '4em' : '0'}}>
      {message.type === 'ai' && (
        <>
          <div className={styles.AIprofile}>
            <img src={imageUrl} alt="chatbotProfile" style={{width: '42px', height: '42px'}}/>
            <p>{message.time}</p>
          </div>
          <div className={styles.AImessageBlock}>
            <div className={styles.AImessageText}>{message.message}</div>
          </div>
        </>
      )}
      {message.type === 'human' && (
        <>
          <div className={styles.humanProfile}>
            <p>{message.time}</p>
          </div>
          <div className={styles.humanMessageBlock}>
            <div className={styles.humanMessageText}>{message.message}</div>
          </div>
        </>
      )}
      <div ref={messageEndRef}></div>
    </div>
  )
}