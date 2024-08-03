import { SideBar } from '../common/SideBar/SideBar.jsx';
import styles from './chatting.module.css';
import { useEffect, useRef, useState } from 'react';
import { ChattingContainer } from './ChattingContainer.jsx';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../services/cookie.js';
import Swal from 'sweetalert2';

export function ChattingPage() {
	const [isError, setIsError] = useState(false);
	const hasAccessChecked = useRef(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (hasAccessChecked.current) return;
		hasAccessChecked.current = true;

		const accessToken = getCookie('accessToken');
		if (!accessToken) {
			setIsError(true);
			Swal.fire({
				title: '로그인 후 이용가능합니다.',
				icon: 'error',
				confirmButtonText: '확인',
			}).then((result) => {
				navigate('/login');
			});
		}
	}, []);

	return (
		<div className={styles.block}>
			{!isError && (
				<div className={styles.content}>/>
					<ChattingContainer
						message={'테스트메시지테스트메시지테스트메시지테스트메시지'}
					/>
				</div>
			)}
		</div>
	);
}
