import { FriendsList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <FriendListItem friends={friends} />
    </FriendsList>
  );
};
