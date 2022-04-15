import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.inputs}
        type="text"
        placeholder="Name"
        {...register('Name', { required: true, min: 3, maxLength: 80 })}
      />
      <input
        className={styles.inputs}
        type="text"
        placeholder="Your Email"
        {...register('Your Email', { required: true, min: 3, pattern: /^\S+@\S+$/i })}
      />
      <input
        className={styles.inputs}
        type="text"
        placeholder="Topic"
        {...register('Topic', { required: true, min: 3 })}
      />
      <textarea className={styles.inputs} {...register('Message', { required: true, min: 3 })} />

      <input className={styles.button} type="submit" />
    </form>
  );
}
