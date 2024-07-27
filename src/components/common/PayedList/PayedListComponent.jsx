import styles from './payedlistcomponent.module.css';

function PayedListComponent(props) {
	return (
		<div className={styles.container}>
			<div className={styles.productName}>상품명 : {props.productName}</div>
			<div className={styles.cost}>결제 금액 : {props.cost}</div>
			<div className={styles.counts}>수량 : {props.count}</div>
			<div className={styles.provided}>결제 방법 : {props.payments}</div>
			<div className={styles.payedAt}>결제시각 : {props.payedAt}</div>
		</div>
	);
}

export default PayedListComponent;
