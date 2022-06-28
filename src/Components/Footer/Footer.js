import styles from './Footer.module.scss';
import PropTypes from 'prop-types';
export function Footer({ backgroundColor }) {
  return (
    <div className={styles.footer} style={backgroundColor && { backgroundColor }}>
      Copyright © 2022. Designed by Mateusz Binięda
    </div>
  );
}

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: null,
};
