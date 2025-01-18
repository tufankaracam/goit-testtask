import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './ReviewsLocation.module.css';

const ReviewsLocation = ({
  id,
  rating,
  reviewsCount,
  location,
  isSamePageAsReviews,
  onClick,
}) => {
  return (
    <div className={`${css.component} ${isSamePageAsReviews ? css['small-margin'] : ''}`}>
      <div className={css.reviews}>
        <span className={`icon-star ${css['review-icon']}`} />

        <NavLink
          className={css['reviews-link']}
          to={isSamePageAsReviews ? 'reviews' : `/catalog/${id}/reviews`}
          onClick={onClick}>
          {rating}

          ({reviewsCount} Reviews)
        </NavLink>
      </div>

      <div className={css.location}>
        <span className={`icon-map ${css['location-icon']}`} />

        {location}
      </div>
    </div>
  );
};

ReviewsLocation.propTypes = {
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  isSamePageAsReviews: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ReviewsLocation;
