import { itemType } from '../../types/item';
import ItemOption from '../item-option/ItemOption';
import css from './ItemOptions.module.css';


const ItemOptions = ({ item }) => {
  return (
    <div className={css.options}>
      {item.AC && <ItemOption icon="ac" label="AC" />}

      {item.TV && <ItemOption icon="tv" label="TV" />}

      {item.kitchen && <ItemOption icon="cup" label="Kitchen" />}

      {item.bathroom && <ItemOption icon="droplet" label="Bathroom" />}

      {item.radio && <ItemOption icon="radio" label="Radio" />}

      {item.gas && <ItemOption icon="pump" label="Petrol" />}

      {item.transmission === 'automatic' && <ItemOption icon="transmission" label="Automatic" />}
    </div>
  );
};

ItemOptions.propTypes = {
  item: itemType,
};

export default ItemOptions;
