import React, { FunctionComponent } from "react";

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
        <tr key={`user-${index}`}>
          <th>{name}</th>
          <th>{age}</th>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{renderUsers()}</tbody>
    </table>
  );
};

export default TableComponent;
