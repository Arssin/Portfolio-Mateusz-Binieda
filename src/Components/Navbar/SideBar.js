import styles from '../Navbar/SideBar.module.scss';

export function SideBar() {
  return (
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
  );
}
