import styles from '../AboutMe/Aboutme.module.scss';

export function Aboutme() {
  return (
    <section className={styles.aboutMeMainDiv}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.aboutMe}>
        <div className={styles.text}>
          🎓 I have a Masters Degree in Logistics and have found my passion in developing programming skills.
          <br />
          💻 Focused mainly on the front-end, willingly using React to create applications.
          <br />
          💪🏻 With great pleasure do I broaden my horizons learning about new solutions.
          <br />
          ⭐️ CodersCamp 2021/2022 participant ⭐️
        </div>
        <div className={styles.myPicture}>Zdjęcie</div>
      </div>
    </section>
  );
}
