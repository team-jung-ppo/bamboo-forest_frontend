import { SideBar } from '../common/SideBar/SideBar.jsx';
import styles from './chatting.module.css';
import { useState } from 'react';
import { ModalSideBar } from '../common/Modal/ModalSideBar.jsx';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight.js';
import { ChattingContainer } from './ChattingContainer.jsx';
import Header from '../common/Header/Header.jsx';

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
			<div style={{ width: `${open === '_true' || !open ? '10px' : '50px'}` }}>
				{open === '_false' ? (
					<KeyboardDoubleArrowRightIcon
						className={styles.arrow}
						style={{ fontSize: '36px', marginLeft: '10px' }}
						onClick={onToggleSideBar}
					/>
				) : null}
			</div>
			<div>
				<Header />
				<ChattingContainer
					message={'테스트메시지테스트메시지테스트메시지테스트메시지'}
				/>
			</div>
		</div>
	);
}
