import styles from '../Navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import { HamburgerMenu } from '../Navbar/HamburgerMenu';
import { useState } from 'react';

export function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);
  const toggleHamburger = () => setOpenHamburger(!openHamburger);

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <ul className={styles.navlist}>
        {['home', 'about', 'my projects', 'skills', 'hobbies', 'contact me'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a className={styles.listanchor} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <HamburgerMenu isOpen={openHamburger} onClick={toggleHamburger} className={styles.menu} />
    </nav>
  );
}
