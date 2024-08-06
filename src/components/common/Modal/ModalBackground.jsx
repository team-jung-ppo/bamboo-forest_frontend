import styles from './modalBackground.module.css';

export function ModalBackground({ open }) {
  return (
    <div style={open === "_true" ? {width : "40px"} : null}>
      <div className={styles.background} style={open === '_true' ? null : { display: 'none'}} />
    </div>
  )
}