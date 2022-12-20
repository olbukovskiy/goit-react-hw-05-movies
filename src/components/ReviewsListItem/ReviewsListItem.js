import PropTypes from 'prop-types';

import { ReviewListItemTitle } from './ReviewsListItem.styled';
import { ReviewListItem } from './ReviewsListItem.styled';
export function ReviewsListItem({ review }) {
  return (
    <ReviewListItem>
      <ReviewListItemTitle>Author: {review.author}</ReviewListItemTitle>
      <p>{review.content}</p>
    </ReviewListItem>
  );
}

ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};
