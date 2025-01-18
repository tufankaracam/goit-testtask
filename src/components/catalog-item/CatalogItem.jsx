import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Badges from '../badges/Badges';
import ReviewsLocation from '../reviews-location/ReviewsLocation';
import { formatPrice } from '../../helpers/format-price';
import { itemType } from '../../types/item';
import css from './CatalogItem.module.css';

const CatalogItem = ({ item, isFavorite, toggleFavorite }) => {
  return (
    <li className={css.component}>
      <div className="image-wrapper">
        <img
          className="image"
          src={item.img}
          alt={item.title} />
      </div>

      <div className={css.about}>
        <div className={css.header}>
          <h2 className="item-title">{item.name}</h2>

          <div className={css['price-fav']}>
            <span className="item-price">{formatPrice(item.price)}</span>

            <button
              className={`${css['favorite-toggle']} ${isFavorite ? css.favorite: ''}`}
              type="button"
              onClick={() => toggleFavorite(item.id)}>
              <span className={`icon-heart ${css['fav-icon']}`} />
            </button>
          </div>
        </div>

        <ReviewsLocation
          id={item.id}
          rating={item.rating}
          reviewsCount={item.reviewsCount}
          location={item.location} />

        <p className={css.description}>{item.description}</p>

        <Badges item={item} />

        <NavLink
          to={`/catalog/${item.id}`}
          className={`button ${css.show}`}>
          Show More
        </NavLink>
      </div>
    </li>
  );
};

CatalogItem.propTypes = {
  item: itemType,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default CatalogItem;
