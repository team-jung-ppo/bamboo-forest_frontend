import styles from './chatting.module.css';
import { useEffect, useRef, useState } from 'react';
import { ChattingContainer } from './ChattingContainer.jsx';
import {useLocation, useNavigate} from 'react-router-dom';
import { getCookie } from '../../services/cookie.js';
import Swal from 'sweetalert2';
import {ChattingInput} from "./ChattingInput.jsx";

export function ChattingPage() {
	const [isError, setIsError] = useState(false);
	const hasAccessChecked = useRef(false);
	const location = useLocation();
	const ws = useRef(null);
	const memberId = useRef(1);

	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
	}

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		const roomId = location.state.roomId;

		// react-use-websocket 방식



		// // socket.io 방식
		// const socket = io(`${import.meta.env.VITE_SOCKET_URL}`, {
		// 	path: '/ws',
		// 	extraHeaders: {
		// 		Authorization: `${accessToken}`,
		// 		roomId: `${roomId}`,
		// 		memberId: memberId.current++,
		// 	},
		// 	transports: ['polling'],
		// });

	}, []);

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
				<div className={styles.content}>
					<ChattingContainer
						message={'테스트메시지테스트메시지테스트메시지테스트메시지'}
					/>
				</div>
			)}
			<div className={styles.inputBlock}>
				<ChattingInput />
			</div>
		</div>
	);
}
