import { Comment } from '../../types/comments.type';
import { ReviewItem } from '../../components/review-item/review-item';
import { ReviewForm } from '../../components/review-form/review-form';
import { faker } from '@faker-js/faker';
import { MAX_REVIEWS_COUNT } from '../../const/const';

type ReviewFormProps ={
  reviews: Comment[];
};

function ReviewList ({reviews}: ReviewFormProps) {
  return (
    <>
      <ul className="reviews__list">
        <div>
          {reviews.slice(0, MAX_REVIEWS_COUNT).map((review) => (
            <ReviewItem
              review={review}
              key={review.id}
            />
          ))}
        </div>
      </ul>
      <ReviewForm isAuthorized={faker.datatype.boolean()} />
    </>
  );
}

export { ReviewList };
