import styles from './ContactLeftSide.module.scss';

export function ContactLeftSide() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        If you want to contact me, please describe your question and send it to me through one of the available options!
      </div>
      <div className={styles.divBtn}>
        <a href="#" className={styles.neonBtn}>
          Neon
        </a>
      </div>
    </div>
  );
}
