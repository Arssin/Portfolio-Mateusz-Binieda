import styles from '../Navbar/Hamburger.module.scss';

export function Hamburger({ isOpen, onClick }) {
  return (
    <div className={styles.toggle} onClick={onClick}>
      {isOpen ? <div className={styles.bar} /> : 'kek'}
    </div>
  );
}
