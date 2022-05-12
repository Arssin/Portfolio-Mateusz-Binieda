import styles from './Slider.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import certyficates from './SliderData.js';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section id="certificates" className={styles.section}>
      <p className={styles.title}> certificates</p>
      <motion.div data-aos="fade-up" className={styles.carousel} ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.innerCarousel}>
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
