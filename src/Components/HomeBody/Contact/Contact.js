import styles from '../Contact/Contact.module.scss';
import { ContactForm } from '../Contact/ContactForm';
import { ContactLeftSide } from '../Contact/ContactLeftSide';

export const Contact = () => {
  return (
    <section className={styles.section} id="contact me">
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.container}>
        <ContactLeftSide />
        <ContactForm />
      </div>
    </section>
  );
};
