import styled from 'styled-components';

export const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;
export const TransactionsTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-bottom: 40px;
  th {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    text-align: center;
    background-color: rgba(82, 94, 255, 0.137);
  }
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
