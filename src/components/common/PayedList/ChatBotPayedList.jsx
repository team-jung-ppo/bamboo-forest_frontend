import styles from './chatbotpayedlist.module.css';

function ChatBotPayedList(props) {
	return (
		<div className={styles.container}>
			<div className={styles.img}>
				<img src={props.imgUrl} alt="" />
			</div>
			<div className={styles.name}>{props.name}</div>
			<div className={styles.description}>{props.description}</div>
			<div className={styles.amount}>{props.amount}</div>
			<div className={styles.price}>{props.price}</div>
			<div className={styles.payedAt}>{props.payedAt}</div>
		</div>
	);
}

export default ChatBotPayedList;
