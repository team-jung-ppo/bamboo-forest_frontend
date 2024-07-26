import styles from './payedlistcomponent.module.css';

function PayedListComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.productName}>상품명</div>
			<div className={styles.cost}>결제 금액</div>
			<div className={styles.counts}>수량</div>
			<div className={styles.provided}>결제 방법</div>
			<div className={styles.payedAt}>결제시각</div>
		</div>
	);
}

export default PayedListComponent;
