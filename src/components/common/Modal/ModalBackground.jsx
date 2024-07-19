import styles from './modalBackground.module.css';

export function ModalBackground({ open }) {
  return (
    <div className={styles.background} style={open === '_true' || !open ? null : { display: 'none'}} />
  )
}