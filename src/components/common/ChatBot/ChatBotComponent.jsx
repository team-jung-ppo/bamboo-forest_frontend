import styles from './chatbotcomponent.module.css';

function ChatBotComponent(props) {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>{props.icon}</div>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.feature}>{props.features}</div>
			<div className={styles.cost}>{props.cost}</div>
		</div>
	);
}

export default ChatBotComponent;
