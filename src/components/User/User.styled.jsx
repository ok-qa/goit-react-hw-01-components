import styled from 'styled-components';

export const Profile = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #9eddcc7a;
  width: 230px;
  border: 1px solid black;
  border-radius: 5%;
`;

export const Avatar = styled.img`
  width: 120px;
  border-radius: 100px;
  background-color: rgb(207, 226, 241);
`;

export const Stats = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px;
  font-weight: bold;
`;