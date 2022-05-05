import styles from '../HomeBody/Homebody.module.scss';
import { Aboutme } from './AboutMe/Aboutme';
import { Start } from '../HomeBody/Start/Start';
import { MyProjects } from '../HomeBody/MyProjects/MyProjects';
import { Skills } from '../HomeBody/Skills/Skills';
import { Slider } from '../HomeBody/Certificate/Slider';
import { SliderData } from '../HomeBody/Certificate/SliderData';
import { Contact } from './Contact/Contact';

export function HomeBody() {
  return (
    <div>
      <div className={styles.start}>
        <Start />
      </div>
      <div className={styles.sections}>
        <Aboutme />
        <Skills />
        <MyProjects />
        <Slider slides={SliderData} />
        <Contact />
      </div>
    </div>
  );
}
