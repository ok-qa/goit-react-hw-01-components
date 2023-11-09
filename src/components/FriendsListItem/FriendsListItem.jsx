import PropTypes from 'prop-types';
import { FriendsListItemContainer, Status } from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsListItemContainer key={id}>
      <Status $isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItemContainer>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
