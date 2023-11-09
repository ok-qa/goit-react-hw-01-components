import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { FriendsListContainer } from './FriendsListContainer.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsListContainer>
  );
};
