import styles from '../HomeBody/Homebody.module.scss';

export function HomeBody() {
  return (
    <div className={styles.body}>
      <section className={styles.home}>
        <div className={styles.welcome}>
          <div className={styles.tloText}>
            <h3>Home</h3>
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
