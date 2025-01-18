import { itemType } from '../../types/item';
import Badge from '../badge/Badge';
import css from './Badges.module.css';


const Badges = ({ item }) => {
  return (
    <div className={css.component}>
      {item.AC && <Badge icon="ac" label="AC" />}

      {item.TV && <Badge icon="tv" label="TV" />}

      {item.kitchen && <Badge icon="cup" label="Kitchen" />}

      {item.bathroom && <Badge icon="droplet" label="Bathroom" />}

      {item.radio && <Badge icon="radio" label="Radio" />}

      {item.engine === 'petrol' && <Badge icon="pump" label="Petrol" />}

      {item.transmission === 'automatic' && <Badge icon="transmission" label="Automatic" />}
    </div>
  );
};

Badges.propTypes = {
  item: itemType,
};

export default Badges;
