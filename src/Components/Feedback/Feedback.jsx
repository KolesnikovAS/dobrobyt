import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import icons from '../../Assets/images/icons';

const { starIcon, fullStarIcon, dialogIcon } = icons;

const Feedback = ({ rank, name, category, comment }) => {
    const rating = [0, 0, 0, 0, 0];
    for (let i = 0; i < rank; i += 1) {
        rating[i] = 1;
    }
    return (
        <div className={styles.feedback}>
            <h5 className={styles.feedback_category}>{category}</h5>
            <div className={styles.comment_container}>
                <img className={styles.comment_icon} src={dialogIcon} alt="icon" />
                <p className={styles.feedback_comment}>{comment}</p>
            </div>
            <ul className={styles.feedback_rating}>
                {rating.map((item, index) => (
                    <li key={`${item}${index}`}>
                        <img alt="star" src={item ? fullStarIcon : starIcon} />
                    </li>
                ))}
            </ul>
            <p className={styles.feedback_author}>{name}</p>
        </div>
    );
};

Feedback.propTypes = {
    rank: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    comment: PropTypes.string,
};

Feedback.defaultProps = {
    rank: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    comment: PropTypes.string,
};

export default Feedback;
