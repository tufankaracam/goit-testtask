import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import {
  addToFavorites,
  deleteFromFavorites,
  increaseCampersToShow,
  selectFilteredCampers,
  selectFavorites,
  selectIsLoading,
  selectCampersToShow,
} from '../../redux/campersSlice';
import Filters from '../../components/filters/Filters';
import CatalogItem from '../../components/catalog-item/CatalogItem';
import css from './Catalog.module.css';

const Catalog = () => {
  const items = useSelector(selectFilteredCampers);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const campersToShow = useSelector(selectCampersToShow);
  const dispatch = useDispatch();
  const visibleItems = items.slice(0, campersToShow);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  function isFavorite(id) {
    return favorites.includes(id);
  }

  function onToggleFavorite(id) {
    if (isFavorite(id)) {
      dispatch(deleteFromFavorites(id));
      return;
    }

    dispatch(addToFavorites(id));
  }

  return (
    <main className="container">
      <div className="content">
        <div className={css.component}>
          <Filters />

          <section>
            { isLoading && <ClipLoader
              color="#101828"
              loading={true}
              size={75}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> }

            {!isLoading && items.length > 0 &&
              <ul className={css.list}>
                {visibleItems.map(item =>
                  <CatalogItem
                    item={item}
                    key={item.id}
                    isFavorite={isFavorite(item.id)}
                    toggleFavorite={onToggleFavorite} />)}
              </ul>
            }

            {!isLoading && items.length > campersToShow && 
              <button
                type="button"
                className={css.more}
                onClick={() => dispatch(increaseCampersToShow())}>
                Load more
              </button>
            }

            {!isLoading && items.length === 0 &&
              <p className={css.empty}>No items found</p>
            }
          </section>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
