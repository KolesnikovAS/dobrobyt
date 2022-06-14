import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

const Icon = ({ src, color }) => (
    <div className={`${styles.icon_container} ${styles[color]}`}>
        <img className={styles.icon} src={src} alt="icon" />
    </div>
);

Icon.propTypes = {
    color: PropTypes.oneOf(['orange', 'black']),
    src: PropTypes.string,
};
Icon.defaultProps = {
    color: 'orange',
    src: '#',
};

export default Icon;
