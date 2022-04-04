import styles from '../Navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo1.png';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <ul className={styles.navlist}>
        <li>Home</li>
        <li>About Me</li>
        <li>My Projects</li>
        <li>Skills</li>
        <li>Hobbies</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
}
