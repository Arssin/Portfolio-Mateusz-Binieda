import { RiReactjsFill, RiHtml5Fill } from 'react-icons/ri';
import { FaSass, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiJest, SiRedux, SiGit, SiDocker } from 'react-icons/si';
import styles from './Skills.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div data-aos="fade-up" className={styles.slider}>
        <div className={styles.slidetrack}>
          <div className={styles.slide}>
            <RiReactjsFill className={styles.icon} />
            <div className={styles.text}>React</div>
          </div>
          <div className={styles.slide}>
            <RiHtml5Fill className={styles.icon} />
            <div className={styles.text}>HTML5</div>
          </div>
          <div className={styles.slide}>
            <FaSass className={styles.icon} />
            <div className={styles.text}>SASS</div>
          </div>
          <div className={styles.slide}>
            <FaCss3Alt className={styles.icon} />
            <div className={styles.text}>CSS3</div>
          </div>
          <div className={styles.slide}>
            <FaNodeJs className={styles.icon} />
            <div className={styles.text}>NodeJs</div>
          </div>
          <div className={styles.slide}>
            <SiJavascript className={styles.icon} />
            <div className={styles.text}>JavaScript</div>
          </div>
          <div className={styles.slide}>
            <SiTypescript className={styles.icon} />
            <div className={styles.text}>TypeScript</div>
          </div>
          <div className={styles.slide}>
            <SiJest className={styles.icon} />
            <div className={styles.text}>Jest</div>
          </div>
          <div className={styles.slide}>
            <SiRedux className={styles.icon} />
            <div className={styles.text}>Redux</div>
          </div>
          <div className={styles.slide}>
            <SiGit className={styles.icon} />
            <div className={styles.text}>Git</div>
          </div>
          <div className={styles.slide}>
            <SiDocker className={styles.icon} />
            <div className={styles.text}>Docker</div>
          </div>

          <div className={styles.slide}>
            <RiReactjsFill className={styles.icon} />
            <div className={styles.text}>React</div>
          </div>
          <div className={styles.slide}>
            <RiHtml5Fill className={styles.icon} />
            <div className={styles.text}>HTML5</div>
          </div>
          <div className={styles.slide}>
            <FaSass className={styles.icon} />
            <div className={styles.text}>SASS</div>
          </div>
          <div className={styles.slide}>
            <FaCss3Alt className={styles.icon} />
            <div className={styles.text}>CSS3</div>
          </div>
          <div className={styles.slide}>
            <FaNodeJs className={styles.icon} />
            <div className={styles.text}>NodeJs</div>
          </div>
          <div className={styles.slide}>
            <SiJavascript className={styles.icon} />
            <div className={styles.text}>JavaScript</div>
          </div>
          <div className={styles.slide}>
            <SiTypescript className={styles.icon} />
            <div className={styles.text}>TypeScript</div>
          </div>
          <div className={styles.slide}>
            <SiJest className={styles.icon} />
            <div className={styles.text}>Jest</div>
          </div>
          <div className={styles.slide}>
            <SiRedux className={styles.icon} />
            <div className={styles.text}>Redux</div>
          </div>
          <div className={styles.slide}>
            <SiGit className={styles.icon} />
            <div className={styles.text}>Git</div>
          </div>
          <div className={styles.slide}>
            <SiDocker className={styles.icon} />
            <div className={styles.text}>Docker</div>
          </div>
        </div>
      </div>
    </section>
  );
};
