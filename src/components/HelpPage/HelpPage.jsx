import styles from './helppage.module.css';
import Header from '../common/Header/Header';

function HelpPage() {
	return (
		<div className={styles.container}>
			<Header />
			<h3>Help Page</h3>
			<p>Help ............. Text ..........</p>
		</div>
	);
}

export default HelpPage;
