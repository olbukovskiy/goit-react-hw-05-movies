import PropTypes from 'prop-types';

import { picturePathPlace } from 'components/services/API';
import {
  CastItemPictureThumb,
  CastItemTextThumb,
  CastThumb,
} from './CastItem.styled';

export function CastItem({ name, character, profile_path }) {
  return (
    <CastThumb>
      <CastItemPictureThumb>
        <img src={picturePathPlace(profile_path)} alt={name} />
      </CastItemPictureThumb>
      <CastItemTextThumb>
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </CastItemTextThumb>
    </CastThumb>
  );
}

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
