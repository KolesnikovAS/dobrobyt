import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ color, size, title }) => (
    <button type="button" className={`${styles.button} ${styles[color]} ${styles[size]}`}>
        {title}
    </button>
);

Button.propTypes = {
    color: PropTypes.oneOf(['orange', 'black']),
    size: PropTypes.oneOf(['small', 'medium', 'big']),
    title: PropTypes.string,
};
Button.defaultProps = {
    color: 'orange',
    size: 'big',
    title: 'ВЫЗВАТЬ МАСТЕРА',
};

export default Button;
