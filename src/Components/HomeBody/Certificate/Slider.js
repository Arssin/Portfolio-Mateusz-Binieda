import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';
import styles from './Slider.module.scss';
import PropTypes from 'prop-types';

export const Slider = ({ slides }) => {
  const [state, setState] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setState(state === length - 1 ? 0 : state + 1);
  };

  const prevSlide = () => {
    setState(state === 0 ? length - 1 : state - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className={styles.section} id="certificates">
      <h1 className={styles.title}>Certyfikaty</h1>
      <div className={styles.certificates}>
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
        <div>
          {SliderData.map((slide, index) => {
            return (
              <div className={index === state ? styles.slideActive : styles.slide} key={index}>
                {index === state && <img src={slide.image} alt="certificates" className={styles.images} />}
              </div>
            );
          })}
        </div>
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
      </div>
    </section>
  );
};

Slider.propTypes = {
  slides: PropTypes.array,
  length: PropTypes.number,
};
