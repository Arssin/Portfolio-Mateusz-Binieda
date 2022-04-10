import styles from '../Navbar/NavMobile.module.scss';

export function NavMobile() {
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
