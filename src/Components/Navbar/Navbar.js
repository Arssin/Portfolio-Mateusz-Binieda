import styles from '../Navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import { useState } from 'react';
import { Hamburger } from '../Navbar/Hamburger.js';
export function Navbar() {
  const [hamburgerIsOpen, hamburgerSetIsOpen] = useState(true);
  const toggleHamburger = () => hamburgerSetIsOpen(!hamburgerIsOpen);

  return (
    <nav className={styles.navbar}>
      <Link to="#">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <ul className={hamburgerIsOpen ? `${styles.navlist} ${styles.navlistDisabled}` : `${styles.navlist}`}>
        {['home', 'about', 'skills', 'my projects', 'certificates', 'contact me'].map((item) => (
          <li onClick={toggleHamburger} className={styles.list} key={`link-${item}`}>
            <a className={styles.listanchor} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger isOpen={hamburgerIsOpen} onClick={toggleHamburger} />
    </nav>
  );
}
