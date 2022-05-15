import styles from '../Navbar/Hamburger.module.scss';

export function Hamburger({ isOpen, onClick }) {
  return (
    <div className={styles.toggle} onClick={onClick} aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}>
      {isOpen ? <div className={styles.bar} /> : 'kek'}
    </div>
  );
}
