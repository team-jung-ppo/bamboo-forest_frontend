import styles from './chatbotcomponent.module.css';

function ChatBotComponent(props) {
	return (
		<div className={styles.container}>
			<div className={styles.img}>{props.imgUrl}</div>
			<div className={styles.name}>{props.name}</div>
			<div className={styles.description}>{props.description}</div>
			<div className={styles.cost}>{props.cost}</div>
			<button>구매하기</button>
		</div>
	);
}

export default ChatBotComponent;
