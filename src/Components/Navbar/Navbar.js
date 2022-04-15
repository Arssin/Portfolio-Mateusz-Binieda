import styles from '../Navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import { HamburgerMenu } from '../Navbar/HamburgerMenu';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <ul className={styles.navlist}>
        {['home', 'about', 'my projects', 'skills', 'certificates', 'contact me'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a className={styles.listanchor} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <HamburgerMenu />
    </nav>
  );
}
