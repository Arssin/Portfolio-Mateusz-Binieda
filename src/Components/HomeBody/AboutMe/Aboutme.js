import styles from '../AboutMe/Aboutme.module.scss';
import avatar from '../../../images/avatar.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className={styles.aboutMeMainDiv}>
      <h2 className={styles.title}>About Me</h2>
      <div data-aos="zoom-out-up" className={styles.aboutMe}>
        <div className={styles.text}>
          🎓 I have a Masters Degree in Logistics and have found my passion in developing programming skills.
          <br />
          💻 Focused mainly on the front-end, willingly using React to create applications.
          <br />
          💪🏻 With great pleasure do I broaden my horizons learning about new solutions.
          <br />
          ⭐️ CodersCamp 2021/2022 participant ⭐️
        </div>
        <div className={styles.picturediv}>
          <ul className={styles.pictureText}>
            <li>Mateusz Binięda</li>
            <li>25 years old </li>
            <li>+48 695 890 109</li>
            <li>mateusz.binieda@onet.pl</li>
          </ul>
          <img data-aos="slide-left" src={avatar} alt="avatar" className={styles.avatar} />
        </div>
      </div>
    </section>
  );
}
