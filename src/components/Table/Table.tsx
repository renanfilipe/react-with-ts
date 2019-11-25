import React, { FunctionComponent } from "react";
import { Table, Td, Th, Tr } from "./TableStyle";

interface Props {
  users: Array<{
    name: string;
    age: number;
  }>;
}

const TableComponent: FunctionComponent<Props> = ({ users }): JSX.Element => {
  if (users.length === 0) {
    return null!;
  }

  const renderUsers = (): JSX.Element[] => {
    return users.map(({ age, name }, index) => {
      return (
        <Tr key={`user-${index}`}>
          <Th>{name}</Th>
          <Th>{age}</Th>
        </Tr>
      );
    });
  };

  return (
    <Table>
      <thead>
        <Tr>
          <Td>Name</Td>
          <Td>Age</Td>
        </Tr>
      </thead>
      <tbody>{renderUsers()}</tbody>
    </Table>
  );
};

export default React.memo(TableComponent);
