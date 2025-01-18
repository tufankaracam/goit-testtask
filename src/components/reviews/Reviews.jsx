import { useSelector } from 'react-redux';
import { selectSingleItem } from '../../redux/campersSlice';
import css from './Reviews.module.css';

const Reviews = () => {
  const item = useSelector(selectSingleItem);
  const updatedReviews = item.reviews.map((review, index) => {
    return { ...review, id: index };
  });
  const numbers = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={css.component}>
      {!updatedReviews.length && <p>No reviews yet</p>}

      {updatedReviews.map(review =>
        <div
          key={review.id}
          className={css.item}>
          <div className={css.header}>
            <div className={css.avatar}>
              {review.reviewer_name[0].toUpperCase()}
            </div>

            <div>
              <h4 className={css.name}>{review.reviewer_name}</h4>
              
              <div className={css.rating}>
                {numbers.map((number) =>
                  <span
                    key={number}
                    className={`${css.icon} icon-star ${number <= review.reviewer_rating ? css.active : ''}`}
                  />
                )}
              </div>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
