import { useSelector } from 'react-redux';
import { selectSingleItem } from '../../redux/campersSlice';
import Badges from '../badges/Badges';
import css from './Features.module.css';

const Features = () => {
  const item = useSelector(selectSingleItem);
  const keys = [
    'transmission',
    'engine',
    'AC',
    'bathroom',
    'kitchen',
    'TV', 'radio',
    'refrigerator',
    'microvawe',
    'gas',
    'water',
    'form',
    'length',
    'width',
    'height',
    'tank',
    'consumption',
  ];

  return (
    <div className={css.component}>
      <div className={css.options}>
        <Badges item={item} />
      </div>

      <h3 className="section-title">Vehicle details</h3>

      {keys.map(key => item[key] &&
        <p className={css.item} key={key}>
          <span>{key}</span>
          <span>{typeof item[key] === 'boolean' ? '+' : item[key]}</span>
        </p>
      )}
    </div>
  );
};

export default Features;
