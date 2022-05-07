import styles from '../../HomeBody/MyProjects/MyProjects.module.scss';
import starwars from '../../../images/raz.png';
import bking from '../../../images/dwa.png';
import { BsGithub } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const MyProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="my projects" className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div data-aos="fade-up" className={styles.boxDiv}>
        <div className={styles.box}>
          <a className={styles.link} href="https://sturdy-journey-761820ff.pages.github.io/">
            <img className={styles.image} src={starwars} />{' '}
          </a>
          <span className={styles.span}> Star Wars Quizz App</span>
          <a href="https://github.com/CodersCamp2021/Michal-Team-Projekt-1">
            <BsGithub className={styles.icons} />
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://michal-team-projekt-2.netlify.app">
            <img className={styles.image} src={bking} />
          </a>
          <span className={styles.span}> Bking - Your Vacation Rentals!</span>
          <a href="https://github.com/CodersCamp2021/michal-team-projekt-2">
            <BsGithub className={styles.icons} />
          </a>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={bking} />
        </div>
      </div>
    </section>
  );
};
