import { SideBar } from '../common/SideBar/SideBar.jsx';
import styles from './chatting.module.css';
import { useState } from 'react';
import { ModalSideBar } from '../common/Modal/ModalSideBar.jsx';
import Header from '../MainPage/Header.jsx';

export function ChattingPage() {
	const [open, setOpen] = useState('');

	const onToggleSideBar = () => {
		if (open === '_false') {
			setOpen('_true');
		} else if (open === '_true' || !open) {
			setOpen('_false');
		}
	};

	return (
		<div className={styles.block}>
			<SideBar open={open} onToggleSideBar={onToggleSideBar} />
			<ModalSideBar open={open} onToggleSideBar={onToggleSideBar} />
			<div
				style={{ width: `${open === '_true' || !open ? '10px' : '40px'}` }}
			/>
			<Header />
			{/* <div>하이하이</div> */}
		</div>
	);
}
