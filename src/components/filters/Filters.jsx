import { useDispatch } from 'react-redux';
import { resetCampersToShow } from '../../redux/campersSlice';
import { changeFilters } from '../../redux/filtersSlice';
import Filter from '../filter/Filter';
import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;

    dispatch(changeFilters({
      AC: elements.ac.checked,
      alcove: elements.alcove.checked,
      automatic: elements.automatic.checked,
      bathroom: elements.bathroom.checked,
      fullyIntegrated: elements.fully.checked,
      kitchen: elements.kitchen.checked,
      location: elements.location.value,
      TV: elements.tv.checked,
      van: elements.van.checked,
    }));
    dispatch(resetCampersToShow());
  }
  
  return (
    <section className={css.component}>
      <form onSubmit={onSubmit}>
        <div className={css.location}>
          <label className={css.label}>Location</label>

          <div className="input-group">
            <span className="icon-map input-icon" />

            <input
              className="input-field"
              type="text"
              placeholder="City"
              name="location" />
          </div>
        </div>

        <label className={css.label}>Filters</label>

        <div className={css.category}>
          <h3 className="section-title">Vehicle equipment</h3>

          <div className={css.items}>
            <Filter icon="ac" label="AC" name="ac" id="ac" />

            <Filter icon="transmission" label="Automatic" name="automatic" id="automatic" />

            <Filter icon="cup" label="Kitchen" name="kitchen" id="kitchen" />

            <Filter icon="tv" label="TV" name="tv" id="tv" />

            <Filter icon="droplet" label="Bathroom" name="bathroom" id="bathroom" />
          </div>
        </div>

        <div className={css.category}>
          <h3 className="section-title">Vehicle type</h3>

          <div className={css.items}>
            <Filter icon="grid-3" label="Van" name="van" id="van" />

            <Filter icon="grid-4" label="Fully Integrated" name="fully" id="fully" />

            <Filter icon="grid-9" label="Alcove" name="alcove" id="alcove" />
          </div>
        </div>

        <button
          className={`button ${css.submit}`}
          type="submit">
            Search
        </button>
      </form>
    </section>
  );
};

export default Filters;
