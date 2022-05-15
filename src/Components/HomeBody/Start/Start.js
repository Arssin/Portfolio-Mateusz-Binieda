import styles from '../Start/Start.module.scss';
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import img from '../../../images/picture.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Start = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="zoom-out-up" id="home" className={styles.home}>
      <ul className={styles.circles}>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
        <li className={styles.list}></li>
      </ul>
      <div className={styles.catchMe}>
        <div data-aos="flip-up" className={styles.title}>
          <h2 className={styles.welcomeText}>Welcome!</h2>
          <h2 className={styles.welcomeText2}>Welcome!</h2>
        </div>
        <span data-aos="flip-right" className={styles.text}>
          My name is Mateusz Binięda. I am a Master of Logistics who has found his passion in programming. I am eager to
          develop my skills and look for new challenges. I started my programming adventure 6 months ago with the start
          of Coders Camp. In my spare time I devote myself to another hobby which is Brazilian Jiu-Jitsu.
        </span>
        <span className={styles.catchMeSpan}>
          <h2 className={styles.catchMeText}>Catch me via: </h2>
          <a href="https://www.facebook.com/mateusz.binieda.14/">
            <BsFacebook className={styles.icons} />
          </a>
          <a href="https://www.linkedin.com/in/mateusz-bini%C4%99da-818141209/">
            <BsLinkedin className={styles.icons} />
          </a>
          <a href="https://www.instagram.com/songo_bjj/">
            <BsInstagram className={styles.icons} />
          </a>
          <a href="https://github.com/Arssin">
            <BsGithub className={styles.icons} />
          </a>
        </span>
      </div>
      <div data-aos="slide-left" className={styles.imageDiv}>
        <img src={img} className={styles.image} alt="welcome image" />
      </div>
    </section>
  );
};
