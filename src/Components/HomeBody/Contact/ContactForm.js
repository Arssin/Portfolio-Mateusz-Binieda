import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import styles from './ContactForm.module.scss';

export function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'Portfolio-MB', form.current, '072amLaSZWMrYWE3v').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    e.target.reset();
  };

  return (
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <div className={styles.title}>Leave me a message! </div>
      <div className={styles.div}>
        <input placeholder="&nbsp;Name" className={styles.input} type="text" name="name" />
      </div>
      <div className={styles.div}>
        <input placeholder="&nbsp;Email" className={styles.input} type="email" name="email" />
      </div>
      <div className={styles.div}>
        <input placeholder="&nbsp;Subject" className={styles.input} type="text" name="subject" />
      </div>
      <div className={styles.div}>
        <textarea className={styles.message} placeholder="&nbsp;Message" name="message" />
      </div>
      <div className={styles.div}>
        <input type="submit" value="Send" className={styles.sendBtn} />
      </div>
    </form>
  );
}
