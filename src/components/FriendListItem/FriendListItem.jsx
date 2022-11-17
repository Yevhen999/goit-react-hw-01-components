import PropTypes from 'prop-types';

import { FriendItem, FriendOnline } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <FriendItem key={friend.id}>
      <FriendOnline isOnline={friend.isOnline}></FriendOnline>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
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
