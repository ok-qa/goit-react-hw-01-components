import PropTypes from 'prop-types';
import { Profile, Avatar, Stats, Item } from '../App.styled.js';

export const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" />
        <p className="name"> {username}</p>
        <p className="tag"> @{tag}</p>
        <p className="location"> {location}</p>
      </div>
      <Stats>
        <Item>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </Item>
      </Stats>
    </Profile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
