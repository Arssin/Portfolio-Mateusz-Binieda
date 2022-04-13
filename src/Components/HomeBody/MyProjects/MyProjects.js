import styles from '../../HomeBody/MyProjects/MyProjects.module.scss';
import starwars from '../../../images/raz.png';
import bking from '../../../images/dwa.png';

export const MyProjects = () => {
  return (
    <section id="my projects" className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.boxDiv}>
        <div className={styles.box}>
          <a className={styles.link} href="https://sturdy-journey-761820ff.pages.github.io/">
            <img className={styles.image} src={starwars} />
            <span className={styles.span}> Star Wars Quizz App</span>
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://michal-team-projekt-2.netlify.app">
            <img className={styles.image} src={bking} />
            <span className={styles.span}> Bking - Your Vacation Rentals!</span>
          </a>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={bking} />
        </div>
      </div>
    </section>
  );
};
