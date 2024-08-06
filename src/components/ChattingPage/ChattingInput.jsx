import styles from './chattingInput.module.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import {useEffect, useRef} from "react";

export function ChattingInput({disabled, onSendMessage}) {
  const inputRef = useRef(null);

  const submitMessage = () => {
    const input = inputRef.current;
    if (input?.value) {
      onSendMessage(input.value);
      input.value = '';
    }
  };

  const detectEnter = (e) => {
    if (e.key === 'Enter') submitMessage();
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        inputRef.current?.focus();
      }
    });
    observer.observe(inputRef.current);
  }, []);

  useEffect(() => {
    if (disabled) return;

    inputRef.current?.focus();
  }, [disabled]);

  return (
    <div className={styles.block}>
      <input
        ref={inputRef}
        onKeyUp={detectEnter}
        disabled={disabled}
        type="text"
        placeholder="상담 내용을 입력해주세요."
        className={styles.input}
        maxLength={1000}
      />
      <div className={styles.sendButton}>
        {disabled ?
          <StopCircleIcon style={{fontSize: '32px'}} /> :
          <PlayCircleIcon onClick={submitMessage} style={{fontSize: '32px'}}/>
        }
      </div>
    </div>
  )
}