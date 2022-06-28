import styles from '../Start/Start.module.scss';
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import img from '../../../images/picture.jpg';
import pdf from '../../../images/myCV.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Start = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="home" className={styles.home}>
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
        <div className={styles.catchMeDiv}>
          <div>
            <p className={styles.catchMeText}>Catch me via: </p>
            <a href="https://www.facebook.com/mateusz.binieda.14/" rel="noreferrer" target="_blank">
              <BsFacebook className={styles.icons} alt="Clickable Facebook icon" />
            </a>
            <a href="https://www.linkedin.com/in/mateusz-bini%C4%99da-818141209/" rel="noreferrer" target="_blank">
              <BsLinkedin className={styles.icons} alt="Clickable Linkedin icon" />
            </a>
            <a href="https://www.instagram.com/songo_bjj/" rel="noreferrer" target="_blank">
              <BsInstagram className={styles.icons} alt="Clickable Instagram icon" />
            </a>
            <a href="https://github.com/Arssin" rel="noreferrer" target="_blank">
              <BsGithub className={styles.icons} alt="Clickable Github icon" />
            </a>
          </div>
          <a href={pdf} target="_blank" rel="noreferrer" className={styles.cv}>
            Check my CV
          </a>
        </div>
      </div>
      <div data-aos="zoom-in-up" className={styles.imageDiv}>
        <img src={img} className={styles.image} alt="welcome image" />
      </div>
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
    </section>
  );
};
