import {Fragment, ChangeEvent, useState } from 'react';
import { MAX_COMMENTS_LENGTH, MIN_COMMENTS_LENGTH } from '../../const/const';

const RatingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'good',
  '2': 'badly',
  '1': 'terribly'
};

function ReviewForm() {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const isValid: boolean =
  comment.length >= MIN_COMMENTS_LENGTH &&
  comment.length <= MAX_COMMENTS_LENGTH &&
  rating !== '';

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
          Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingMap)
          .reverse()
          .map(
            ([key, value]) =>(
              < Fragment key={key}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={key}
                  id={`${key}-stars`}
                  type="radio"
                  checked={rating === value}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor={`${key}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={value}
                >
                  <svg className="form__star-image" width={37} height={33}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </Fragment>
            )
          )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
            stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid} //не сработало
        >
            Submit
        </button>
      </div>
    </form>
  );

}

export { ReviewForm };
