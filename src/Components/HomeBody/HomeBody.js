import styles from '../HomeBody/Homebody.module.scss';
import { Aboutme } from './AboutMe/Aboutme';
import { Start } from '../HomeBody/Start/Start';
import { MyProjects } from '../HomeBody/MyProjects/MyProjects';
import { Skills } from '../HomeBody/Skills/Skills';

export function HomeBody() {
  return (
    <div className={styles.body}>
      <div className={styles.backgroundText}>
        <h2 className={styles.welcomeText}>Welcome!</h2>
        <h2 className={styles.welcomeText2}>Welcome!</h2>
      </div>
      <Start />
      <Aboutme />
      <Skills />
      <MyProjects />
      <section id="hobbies">Hobbies</section>
      <section id="contact me">Contact Me</section>
    </div>
  );
}
