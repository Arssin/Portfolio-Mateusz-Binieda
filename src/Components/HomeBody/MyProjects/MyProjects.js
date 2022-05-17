import styles from '../../HomeBody/MyProjects/MyProjects.module.scss';
import starwars from '../../../images/raz.png';
import bking from '../../../images/dwa.png';
import snake from '../../../images/snake.png';
import portfolio from '../../../images/PortfolioPicture.png';
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
      <p className={styles.title}>my projects</p>
      <div data-aos="fade-up" className={styles.boxDiv}>
        <div className={styles.box}>
          <a
            className={styles.link}
            href="https://sturdy-journey-761820ff.pages.github.io/"
            rel="noreferrer"
            target="_blank"
          >
            <img className={styles.image} src={starwars} alt="Picture star wars quizz project" />
          </a>
          <span className={styles.span}> Star Wars Quizz App</span>
          <a href="https://github.com/Arssin/Star-Wars-Quizz-App-CodersCamp-2021-2022" rel="noreferrer" target="_blank">
            <BsGithub className={styles.icons} alt="Clickable Github icon Star Wars Quizz App" />
          </a>
        </div>
        <div className={styles.box}>
          <a className={styles.link} href="https://michal-team-projekt-2.netlify.app" rel="noreferrer" target="_blank">
            <img className={styles.image} src={bking} alt="Picture of Bking project" />
          </a>
          <span className={styles.span}> Bking - Your Vacation Rentals!</span>
          <a href="https://github.com/Arssin/Bking-App-CodersCamp-2021-2022" rel="noreferrer" target="_blank">
            <BsGithub className={styles.icons} alt="Clickable Github icon Bking" />
          </a>
        </div>
        <div className={styles.box}>
          <a
            className={styles.link}
            href="https://snake-game-practice-mateusz-binieda.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img className={styles.image} src={snake} alt="Picture of snake project" />
          </a>
          <span className={styles.span}> Very Simple Snake Game (PC)</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda" rel="noreferrer" target="_blank">
            <BsGithub className={styles.icons} alt="Clickable Github icon, snake game" />
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.boxDiv}>
        <div className={styles.box}>
          <a className={styles.link} href="https://mbinieda-portfolio.vercel.app/" rel="noreferrer" target="_blank">
            <img className={styles.image} src={portfolio} alt="Picture of My Portfolio Project" />
          </a>
          <span className={styles.span}> My Portfolio </span>
          <a href="https://github.com/Arssin/Portfolio-Mateusz-Binieda" rel="noreferrer" target="_blank">
            <BsGithub className={styles.icons} alt="Clickable Github icon" />
          </a>
        </div>
        <div className={styles.box}>
          <a
            className={styles.link}
            href="https://snake-game-practice-mateusz-binieda.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img className={styles.image} src={snake} alt="Picture of snake project" />
          </a>
          <span className={styles.span}> Very Simple Snake Game</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda" rel="noreferrer" target="_blank">
            <BsGithub className={styles.icons} alt="Clickable Github icon" />
          </a>
        </div>
        <div className={styles.box}>
          <a
            className={styles.link}
            href="https://snake-game-practice-mateusz-binieda.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img className={styles.image} src={snake} alt="Picture of snake project" />
          </a>
          <span className={styles.span}> Very Simple Snake Game</span>
          <a href="https://github.com/Arssin/SnakeGame-Practice-MateuszBinieda" rel="noreferrer" target="_blank">
            <BsGithub className={styles.icons} alt="Clickable Github icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
