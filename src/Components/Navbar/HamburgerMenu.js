import styles from '../Navbar/HamburgerMenu.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export function HamburgerMenu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.hamburger}>
      <GiHamburgerMenu toggle={toggle} onClick={() => setToggle(!toggle)} />
    </div>
  );
}
