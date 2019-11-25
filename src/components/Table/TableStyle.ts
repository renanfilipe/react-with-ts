import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 250px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #4caf50;
  color: white;
`;
