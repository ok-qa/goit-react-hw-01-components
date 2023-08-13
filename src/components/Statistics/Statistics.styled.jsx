import styled from 'styled-components';

export const StatsSection = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #136b63;
  border-radius: 5px;
  padding: 3px 8px;
`;
export const StatsItem = styled.li`
  background-color: #9eddcc7a;
  border: black;

  border-radius: 8px;
  padding: 15px;
  transition: background-color 0.3s ease;
`;