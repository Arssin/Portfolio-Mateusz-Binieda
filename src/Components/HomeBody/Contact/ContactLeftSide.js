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
          <a href="https://www.facebook.com/mateusz.binieda.14/" className={styles.button}>
            <span className={styles.span}>
              Facebook
              <BsFacebook className={styles.icons} />
            </span>
          </a>
          <a href="https://github.com/Arssin" className={styles.button}>
            <span className={styles.span}>
              Github
              <br />
              <BsGithub className={styles.icons} />
            </span>
          </a>
        </div>
        <div className={styles.flex}>
          <a href="https://www.linkedin.com/in/mateusz-bini%C4%99da-818141209/" className={styles.button}>
            <span className={styles.span}>
              Linkedin
              <BsLinkedin className={styles.icons} />
            </span>
          </a>
          <a href="https://www.instagram.com/songo_bjj/" className={styles.button}>
            <span className={styles.span}>
              Instagram
              <BsInstagram className={styles.icons} />
            </span>
          </a>
        </div>
        <div className={styles.findMe}>...and contact me there! :) </div>
      </div>
    </div>
  );
}
