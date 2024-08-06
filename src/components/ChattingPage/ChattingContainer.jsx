import styles from './chattingContainer.module.css';

export function ChattingContainer({message, imageUrl, lastIndex}) {
  console.log(imageUrl);

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
    </div>
  )
}