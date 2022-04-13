import styles from '../Navbar/HamburgerMenu.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavMobile } from './NavMobile';
import { useState } from 'react';

export const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.hamburger}>
      <GiHamburgerMenu onClick={() => setToggle(!toggle)} alt="hamburger menu icon" className={styles.hamburgerIcon} />
      {toggle && <NavMobile />}
    </div>
  );
};