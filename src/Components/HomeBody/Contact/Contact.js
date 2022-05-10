import styles from '../Contact/Contact.module.scss';
import { ContactForm } from '../Contact/ContactForm';
import { ContactLeftSide } from '../Contact/ContactLeftSide';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.section} id="contact me">
      <p className={styles.title}>contact me</p>
      <div data-aos="fade-up" className={styles.container}>
        <ContactLeftSide />
        <ContactForm />
      </div>
    </section>
  );
};
