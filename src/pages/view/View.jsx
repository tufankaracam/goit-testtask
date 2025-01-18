import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ModalImage from 'react-modal-image';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import ReviewsLocation from '../../components/reviews-location/ReviewsLocation';
import BookingForm from '../../components/booking-form/BookingForm';
import { formatPrice } from '../../helpers/format-price';
import { fetchSingleItem } from '../../redux/campersOps';
import {
  selectIsLoading,
  selectSingleItem,
} from '../../redux/campersSlice';
import css from './View.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.tab, isActive && css.active);
};

const View = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const item = useSelector(selectSingleItem);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isLoading && item && location.pathname.includes('reviews')) {
      scrollToTabs();
    }
  }, [isLoading, item, location]);

  useEffect(() => {
    dispatch(fetchSingleItem(id));
  }, [dispatch, id]);

  function onReviewClick () {
    scrollToTabs();
  }

  function scrollToTabs() {
    document.getElementById('tabs')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <main className="container">
      <div className="content">
        { isLoading && <ClipLoader
          color="#101828"
          loading={true}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> }

        { !isLoading && item && <>
          <div className={css.header}>
            <h1 className={`${css.title} item-title`}>{item.name}</h1>

            <ReviewsLocation
              id={item.id}
              rating={item.rating}
              reviewsCount={item.reviewsCount}
              location={item.location}
              isSamePageAsReviews={true}
              onClick={onReviewClick} />

            <h2 className="item-price">{formatPrice(item.price)}</h2>
          </div>

          <div className={css.gallery}>
            {item.gallery.slice(0, 4).map(({ thumb, original }) =>
            <div
              className="image-wrapper"
              key={original}>
              <ModalImage
                className="image"
                small={thumb}
                large={original}
                alt={item.name}
              />
            </div>)}
          </div>

          <p className={css.description}>{item.description}</p>

          <div
            id="tabs"
            className={css.tabs}>
            <NavLink to={`/catalog/${item.id}`} end className={buildLinkClass}>
              Features
            </NavLink>

            <NavLink to={`/catalog/${item.id}/reviews`} className={buildLinkClass}>
              Reviews
            </NavLink>
          </div>

          <div className={css.bottom}>
            <Outlet />

            <BookingForm />
          </div>
        </>}
      </div>
    </main>
  );
};

export default View;
