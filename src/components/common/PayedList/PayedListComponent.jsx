import styles from './payedlistcomponent.module.css';

function PayedListComponent(props) {
	return (
		<div className={styles.container}>
			<div className={styles.productName}>
				<div className={styles.productNameLabel}>상품명</div>
				<div className={styles.productNameValue}>{props.productName}</div>
			</div>
			<div className={styles.cost}>
				<div className={styles.costLabel}>결제 금액</div>
				<div className={styles.costValue}>{props.cost}</div>
			</div>
			<div className={styles.counts}>
				<div className={styles.countsLabel}>수량</div>
				<div className={styles.countsValue}>{props.count}</div>
			</div>
			<div className={styles.provided}>
				<div className={styles.providedLabel}>결제 방법</div>
				<div className={styles.providedValue}>{props.payments}</div>
			</div>
			<div className={styles.payedAt}>
				<div className={styles.payedAtLabel}>결제시각</div>
				<div className={styles.payedAtValue}>
					{new Date(props.payedAt).toLocaleString()}
				</div>
			</div>
		</div>
	);
}

export default PayedListComponent;
