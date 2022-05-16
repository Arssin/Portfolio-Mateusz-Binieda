import styles from './ContactLeftSide.module.scss';
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

export function ContactLeftSide() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        If you want to contact me, please describe your question and send it to me through one of the available options!
      </div>
      <div className={styles.divBtn}>
        <div className={styles.findMe}>You can also find me via: </div>
        <div className={styles.flex}>
          <a
            href="https://www.facebook.com/mateusz.binieda.14/"
            rel="noreferrer"
            target="_blank"
            className={styles.button}
          >
            <span className={styles.span}>
              Facebook
              <br />
              <BsFacebook className={styles.icons} alt="Facebook Icon" />
            </span>
          </a>
          <a href="https://github.com/Arssin" rel="noreferrer" target="_blank" className={styles.button}>
            <span className={styles.span}>
              Github
              <br />
              <BsGithub className={styles.icons} rel="noreferrer" target="_blank" alt="GitHub Icon" />
            </span>
          </a>
        </div>
        <div className={styles.flex}>
          <a
            href="https://www.linkedin.com/in/mateusz-bini%C4%99da-818141209/"
            rel="noreferrer"
            target="_blank"
            className={styles.button}
          >
            <span className={styles.span}>
              Linkedin
              <br />
              <BsLinkedin className={styles.icons} alt="Linkedin Icon" />
            </span>
          </a>
          <a href="https://www.instagram.com/songo_bjj/" rel="noreferrer" target="_blank" className={styles.button}>
            <span className={styles.span}>
              Instagram
              <BsInstagram className={styles.icons} alt="Instagram Icon" />
            </span>
          </a>
        </div>
        <div className={styles.findMe}>...and contact me there! :) </div>
      </div>
    </div>
  );
}
