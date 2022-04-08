import styles from '../Navbar/HamburgerMenu.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SideBar } from './SideBar';
import { useState } from 'react';

export const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.hamburger}>
      <GiHamburgerMenu onClick={() => setToggle(!toggle)} alt="hamburger menu icon" className={styles.hamburgerIcon} />
      {toggle && <SideBar />}
    </div>
  );
};
