import styles from './chatting.module.css';
import { useEffect, useRef, useState } from 'react';
import { ChattingContainer } from './ChattingContainer.jsx';
import {useLocation, useNavigate} from 'react-router-dom';
import { getCookie } from '../../services/cookie.js';
import Swal from 'sweetalert2';
import {ChattingInput} from "./ChattingInput.jsx";
// import {useStomp} from "../../hooks/useStomp.js";

const MAX_RETRY_COUNT = 5;
const MIN_INTERVAL = 1000;
const MAX_JITTER = 200;

const ONERROR_CODE = 4000;
const NORMAL_CODE = 1000;

export function ChattingPage() {
	const [isError, setIsError] = useState(false);
	const [roomId, setRoomId] = useState('');
	const hasAccessChecked = useRef(false);
	const location = useLocation();
	const accessToken = getCookie('accessToken');
	const memberId = useRef(1);
	const ws = useRef(null);

	const navigate = useNavigate();

	const onSendMessage = (message) => {
		// 메시지 전송

	}

	useEffect(() => {
		if (hasAccessChecked.current) return;
		hasAccessChecked.current = true;

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

	useEffect(() => {
		if (!location.state) {
			navigate('/');
			return;
		}
		setRoomId(location.state.roomId);

		ws.current = new WebSocket(`${import.meta.env.VITE_SOCKET_URL}`);
		console.log(ws.current);

		const setupWebSocket = (wsInstance) => {
			wsInstance.onopen = () => {
				memberId.current = 0; // websocket 첫 연결시 setting
				wsInstance.send()
			};

			wsInstance.onmessage = event => {
				const resData = JSON.parse(event.data);
				const { type } = resData;
				switch (type) {
					case 'AUTH':
						setWebSocketData(resData);
						console.info('resData');
						break;
					default:
						break;
				}
			};
		};

		setupWebSocket(ws.current);

		return () => {
			ws.current?.close();
		};
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
				<ChattingInput onSendMessage={onSendMessage} />
			</div>
		</div>
	);
}
