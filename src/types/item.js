import PropTypes from 'prop-types';

export const itemType = PropTypes.shape({
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  AC: PropTypes.bool.isRequired,
  TV: PropTypes.bool.isRequired,
  bathroom: PropTypes.bool.isRequired,
  engine: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  kitchen: PropTypes.bool.isRequired,
  radio: PropTypes.bool.isRequired,
  transmission: PropTypes.string.isRequired,
});
