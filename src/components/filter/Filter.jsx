import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ icon, label, name, id }) => {
  return (
    <div className={css.component}>
      <input
        type="checkbox"
        className={`${css.input}`}
        name={name}
        id={id}
        value={id} />

      <label
        htmlFor={id}
        className={css.filter}>
        <span className={`icon-${icon} ${css.icon}`} />

        <span className={css.label}>{label}</span>
      </label>
    </div>
  );
};

Filter.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Filter;
