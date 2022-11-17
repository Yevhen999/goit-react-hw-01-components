import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin-left: 20px;
  width: 900px;
  height: 100%;
`;

export const TableHeaderRow = styled.tr`
  background-color: lightseagreen;
`;

export const HeaderItem = styled.th`
  text-transform: uppercase;
  color: tomato;
  padding: 40px;
`;

export const TableMainRow = styled.tr`
  text-align: center;
  &:nth-child(2n + 2) {
    background-color: yellow;
    color: blue;
  }
  &:nth-child(2n + 1) {
    background-color: blue;
    color: yellow;
  }
  &:nth-child(2n + 2):hover,
  &:nth-child(2n + 2):focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: lightseagreen;
    color: tomato;
  }
  &:nth-child(2n + 1):hover,
  &:nth-child(2n + 1):focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: lightseagreen;
    color: tomato;
  }
`;

export const TableMainItem = styled.td`
  padding: 30px;
`;
