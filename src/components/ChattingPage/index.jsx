import styles from './chatting.module.css';
import {useEffect, useRef, useState} from 'react';
import {ChattingContainer} from './ChattingContainer.jsx';
import {useLocation, useNavigate} from 'react-router-dom';
import {getCookie} from '../../services/cookie.js';
import Swal from 'sweetalert2';
import {ChattingInput} from "./ChattingInput.jsx";
import {getCurrentTime} from "../../services/getCurrentTime.js";

export function ChattingPage() {
  const [isError, setIsError] = useState(false);
  const [roomId, setRoomId] = useState('');
  const hasAccessChecked = useRef(false);
  const location = useLocation();
  const accessToken = getCookie('accessToken');
  const memberId = useRef(1);
  const ws = useRef(null);
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();

  const onSendMessage = (message) => {
    // 메시지 전송
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      const msg = {
        message: message,
        type: "TALK"
      };
      ws.current.send(JSON.stringify(msg));
      console.log(`보낸 메시지: ${message}`);
      setMessages((prev) => [...prev, {message, time: getCurrentTime(), type: 'human'}]);
    }
  }

  useEffect(() => {
    if (hasAccessChecked.current) return;
    hasAccessChecked.current = true;

    if (!accessToken || !location.state) {
      setIsError(true);
      Swal.fire({
        title: '로그인 후 이용가능합니다.',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: '확인',
      }).then((result) => {
        navigate('/login');
      });
    }
  }, []);

  useEffect(() => {
    if (!location.state) return;

    setRoomId(location.state.roomId);

    ws.current = new WebSocket(`${import.meta.env.VITE_SOCKET_URL}`);

    const setupWebSocket = (wsInstance) => {
      wsInstance.onopen = () => {
        console.log("채팅 연결 성공");
        if (ws.current.readyState === WebSocket.OPEN) {
          ws.current.send(JSON.stringify({
            message: "채팅 연결",
            type: "AUTH",
            token: accessToken,
            roomId: location.state.roomId,
            memberId: memberId.current++
          }));
        }
      };

      wsInstance.onmessage = event => {
        console.log(event.data);
        if (event.data !== '메시지를 다시 보내주세요')
          setMessages((prev) => [...prev, {message: event.data, time: getCurrentTime(), type: 'ai'}]);
      };

      wsInstance.onclose = (error) => {
        console.log('WebSocket closed', error);
        setupWebSocket(wsInstance)
      };

      wsInstance.onerror = (error) => {
        console.error('WebSocket error', error);
        Swal.fire({
          title: '연결이 끊겼습니다.',
          text: '메인 페이지로 이동합니다.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: '확인',
        }).then((result) => {
          navigate('/');
        });
      };
    };

    setupWebSocket(ws.current);
  }, []);

  return (
    <div className={styles.block}>
      {!isError && (
        messages.map((message, index) => (
          <div key={index} className={styles.content}>
            <ChattingContainer
              messages={messages}
              message={message}
              imageUrl={location.state.imageUrl}
              lastIndex={messages.length - 1 === index}
            />
          </div>
        ))
      )}
      <div className={styles.inputBlock}>
        <ChattingInput disabled={messages.at(-1)?.type === 'human'} onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}
