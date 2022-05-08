import styles from '../HomeBody/Homebody.module.scss';
import { Aboutme } from './AboutMe/Aboutme';
import { Start } from '../HomeBody/Start/Start';
import { MyProjects } from '../HomeBody/MyProjects/MyProjects';
import { Skills } from '../HomeBody/Skills/Skills';
import { Slider } from '../HomeBody/Certificate/Slider';
import { Contact } from './Contact/Contact';

export function HomeBody() {
  return (
    <div className={styles.sections}>
      <Start />
      <Aboutme />
      <Skills />
      <MyProjects />
      <Slider />
      <Contact />
    </div>
  );
}
