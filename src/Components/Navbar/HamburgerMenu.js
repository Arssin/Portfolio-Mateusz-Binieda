import styles from '../Navbar/HamburgerMenu.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HamburgerMenu = () => {
  return (
    <div className={styles.hamburger}>
      <GiHamburgerMenu alt="hamburger menu icon" className={styles.hamburgerIcon} />
    </div>
  );
};
