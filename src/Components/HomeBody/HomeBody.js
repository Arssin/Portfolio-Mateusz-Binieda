import styles from '../HomeBody/Homebody.module.scss';
import { Aboutme } from './AboutMe/Aboutme';
import { Start } from '../HomeBody/Start/Start';

export function HomeBody() {
  return (
    <div className={styles.body}>
      <div className={styles.backgroundText}>
        <h2 className={styles.welcomeText}>Welcome!</h2>
        <h2 className={styles.welcomeText2}>Welcome!</h2>
      </div>
      <Start id="home" />
      <Aboutme id="about" />
      <section id="my projects">My Projects</section>
      <section id="skills">Skills</section>
      <section id="hobbies">Hobbies</section>
      <section id="contact me">Contact Me</section>
    </div>
  );
}
