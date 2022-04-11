import styles from '../Start/Start.module.scss';
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import img from '../../../images/image.png';

export const Start = () => {
  return (
    <section className={styles.home}>
      <div className={styles.catchMe}>
        <h1 className={styles.header}>Hello!</h1>
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
      <div className={styles.imageDiv}>
        <img src={img} className={styles.image} alt="welcome image" />
      </div>
    </section>
  );
};
