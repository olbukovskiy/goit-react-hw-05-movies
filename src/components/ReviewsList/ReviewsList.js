import PropTypes from 'prop-types';
import { ReviewsListItem } from 'components/ReviewsListItem/ReviewsListItem';
import { ReviewList } from './ReviewsList.styled';
import { CastCatalogueTitle } from 'components/CastList/CastList.styled';
export function ReviewsList({ reviews }) {
  return (
    <>
      <CastCatalogueTitle>Reviews</CastCatalogueTitle>
      <ReviewList>
        {reviews.map(review => {
          return <ReviewsListItem key={review.author} review={review} />;
        })}
      </ReviewList>
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ).isRequired,
};
