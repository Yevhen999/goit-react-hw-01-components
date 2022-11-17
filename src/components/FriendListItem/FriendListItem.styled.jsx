import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: yellow;
  outline: 1px solid blue;
  margin-bottom: 20px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: blue;
    color: yellow;
  }
`;

export const FriendOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${props => (props.isOnline ? 'blue' : 'black')};
`;
