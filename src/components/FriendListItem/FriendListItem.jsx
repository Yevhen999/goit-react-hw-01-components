import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { FriendItem, FriendOnline } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <FriendItem key={friend.id}>
      <FriendOnline isOnline={friend.isOnline}></FriendOnline>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </FriendItem>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
