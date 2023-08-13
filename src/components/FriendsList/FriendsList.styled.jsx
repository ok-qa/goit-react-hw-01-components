import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const FriendsListItem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 9px;
  margin: 0;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  width: 180px;
  background-color: #9eddcc7a;
`;
export let Status = styled.span`
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: relative;
  top: 20px;
`;
