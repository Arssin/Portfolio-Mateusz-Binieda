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
        <span className={styles.text}>
          My name is Mateusz Binięda. Lorem ipsum dolor sit amet, consectetur adipiscing, lorem ipsum dolor sit amet,
          consectetur adip, lorem ipsum dolor sit am, consectetur adip, lorem ipsum dolor sit am, lorem ipsum dolor
          sit,lorem ipsum dolor sit am, consectetur adip, lorem ipsum dolor sit am, lorem ipsum dolor sit,lorem ipsum
          dolor sit am, consectetur adip, lorem ipsum dolor sit am, lorem ipsum dolor sit,lorem ipsum dolor sit am,
          consectetur adip, lorem ipsum dolor sit am, lorem ipsum dolor sit,lorem ipsum dolor sit am, consectetur adip,
          lorem ipsum dolor sit am, lorem ipsum dolor sit,lorem ipsum dolor sit am, consectetur adip, lorem ipsum dolor
          sit am, lorem ipsum dolor sit
        </span>
        <span>
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
