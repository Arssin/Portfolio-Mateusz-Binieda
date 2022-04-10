import styles from '../HomeBody/Homebody.module.scss';
import { Aboutme } from './AboutMe/Aboutme';
import { Start } from '../HomeBody/Start/Start';

export function HomeBody() {
  return (
    <div className={styles.body}>
      <Start id="home" />
      <Aboutme id="about" />
      <section id="my projects">My Projects</section>
      <section id="skills">Skills</section>
      <section id="hobbies">Hobbies</section>
      <section id="contact me">Contact Me</section>
    </div>
  );
}
