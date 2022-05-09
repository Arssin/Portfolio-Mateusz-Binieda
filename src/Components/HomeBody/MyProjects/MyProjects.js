import styles from '../../HomeBody/MyProjects/MyProjects.module.scss';
import starwars from '../../../images/raz.png';
import bking from '../../../images/dwa.png';
import snake from '../../../images/snake.png';
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
      <p className={styles.title}>My Projects</p>
      <div data-aos="fade-up" className={styles.boxDiv}>
        <div className={styles.box}>
          <a className={styles.link} href="https://sturdy-journey-761820ff.pages.github.io/">
            <img className={styles.image} src={starwars} />{' '}
          </a>
          <span className={styles.span}> Star Wars Quizz App</span>
          <a href="https://github.com/Arssin/Star-Wars-Quizz-App-CodersCamp-2021-2022">
            <BsGithub className={styles.icons} />
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://michal-team-projekt-2.netlify.app">
            <img className={styles.image} src={bking} />
          </a>
          <span className={styles.span}> Bking - Your Vacation Rentals!</span>
          <a href="https://github.com/Arssin/Bking-App-CodersCamp-2021-2022">
            <BsGithub className={styles.icons} />
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://snake-game-practice-mateusz-binieda.vercel.app/">
            <img className={styles.image} src={snake} />
          </a>
          <span className={styles.span}> Very Simple Snake Game</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda">
            <BsGithub className={styles.icons} />
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.boxDiv}>
        <div className={styles.box}>
          <a className={styles.link} href="https://snake-game-practice-mateusz-binieda.vercel.app/">
            <img className={styles.image} src={snake} />
          </a>
          <span className={styles.span}> Very Simple Snake Game</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda">
            <BsGithub className={styles.icons} />
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://snake-game-practice-mateusz-binieda.vercel.app/">
            <img className={styles.image} src={snake} />
          </a>
          <span className={styles.span}> Very Simple Snake Game</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda">
            <BsGithub className={styles.icons} />
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://snake-game-practice-mateusz-binieda.vercel.app/">
            <img className={styles.image} src={snake} />
          </a>
          <span className={styles.span}> Very Simple Snake Game</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda">
            <BsGithub className={styles.icons} />
          </a>
        </div>
      </div>
    </section>
  );
};
