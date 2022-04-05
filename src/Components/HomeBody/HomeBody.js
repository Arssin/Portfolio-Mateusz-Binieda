import styles from '../HomeBody/Homebody.module.scss';

export function HomeBody() {
  return (
    <div className={styles.body}>
      <section className={styles.home}>
        <div className={styles.welcome}>
          <div className={styles.backgroundText}>
            <h2 className={styles.welcomeText}>Welcome!</h2>
            <h2 className={styles.welcomeText2}>Welcome!</h2>
          </div>
        </div>
      </section>
      <section>About Me</section>
      <section>My Projects</section>
      <section>Skills</section>
      <section>Hobbies</section>
      <section>Contact Me</section>
    </div>
  );
}
