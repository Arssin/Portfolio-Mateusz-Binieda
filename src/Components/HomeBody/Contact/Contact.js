import styles from '../Contact/Contact.module.scss';
import { ContactForm } from '../Contact/ContactForm';

export const Contact = () => {
  return (
    <section className={styles.section} id="contact me">
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.container}>
        <div className={styles.text}>
          <div>Contact me now</div>
          <div>Contact </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
