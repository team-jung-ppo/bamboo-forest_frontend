import {useEffect, useState} from "react";
import useSocket from "../../hooks/socket/useSocket.js";

export function ChattingContainer({ message, speed = 40, onComplete, isResponse = true }) {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [index, setIndex] = useState(0);
  const [socket] = useSocket();

  const reset = () => {
    setDisplayedMessage('');
    setIndex(0);
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      // message 변경 시 초기화
      if (message.slice(0, displayedMessage.length) !== displayedMessage) {
        reset();
        return;
      }

      if (index < message.length) {
        setDisplayedMessage(displayedMessage + message[index]); // 한 글자씩 추가
        setIndex(index + 1);
      } else {
        clearInterval(typingInterval); // 인터벌 카운트 제거
        if (onComplete) onComplete(); // 콜백
      }
    }, speed);

    return () => clearInterval(typingInterval); // 언마운트 시 인터벌 제거
  }, [message, speed, index, onComplete]);

  return (
    <div>
      <div></div>
      <div>
        <div>{isResponse ? displayedMessage : message}</div>
      </div>
    </div>
  )
}