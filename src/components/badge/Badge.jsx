import PropTypes from 'prop-types';
import css from './Badge.module.css';

const Badge = ({ icon, label }) => {
  return (
    <div className={css.component}>
      <span className={`icon-${icon} ${css.icon}`} />

      {label}
    </div>
  );
};

Badge.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Badge;
