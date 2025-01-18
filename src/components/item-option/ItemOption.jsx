import PropTypes from 'prop-types';
import css from './ItemOption.module.css';

const ItemOption = ({ icon, label }) => {
  return (
    <div className={css.option}>
      <span className={`icon-${icon} ${css.icon}`} />

      {label}
    </div>
  );
};

ItemOption.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ItemOption;