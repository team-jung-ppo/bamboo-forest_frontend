import styles from './mychatbotlist.module.css';

function MyChatBotList(props) {
	return (
		<div className={styles.container}>
			<div className={styles.img}>
				<img src={props.imgUrl} alt="" />
			</div>
			<div className={styles.name}>{props.name}</div>
			<div className={styles.description}>{props.description}</div>
		</div>
	);
}
export default MyChatBotList;
