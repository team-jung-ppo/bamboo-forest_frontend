import styles from './chatbotcomponent.module.css';

function ChatBotComponent(props) {
	return (
		<div className={styles.container}>
			<div className={styles.imgBox}>
				<img className={styles.img} src={props.imgUrl} alt="" />
			</div>
			<div className={styles.name}>{props.name}</div>
			<div className={styles.description}>{props.description}</div>
			<div className={styles.cost}>{props.cost} 원</div>
			<button className={styles.buyBtn}>구매하기</button>
		</div>
	);
}

export default ChatBotComponent;
