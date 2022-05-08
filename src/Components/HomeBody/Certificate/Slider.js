// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import { useState } from 'react';
import styles from './Slider.module.scss';
// import PropTypes from 'prop-types';
// import Aos from 'aos';
import 'aos/dist/aos.css';
import certyficates from './SliderData.js';
import { motion } from 'framer-motion';
// import { useRef, useEffect } from 'react';

export function Slider() {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth);
  // }, []);

  return (
    <section className={styles.section}>
      <h2> Certificate</h2>
      <motion.div className={styles.carousel}>
        <motion.div drag="x" dragConstraints={{ right: 0 }} className={styles.innerCarousel}>
          {certyficates.map((image, index) => {
            return (
              <motion.div key={index} className={styles.item}>
                <img className={styles.img} src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
