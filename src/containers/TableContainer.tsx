import React, { FunctionComponent, useEffect } from "react";
import { useUser } from "../store";
import { TableComponent } from "../components";

const TableContainer: FunctionComponent = (): JSX.Element => {
  const { $user, actionFetchUsers } = useUser();

  useEffect(() => {
    if ($user.isLoading) {
      console.log("rodou use effect");
      const fetch = async () => {
        await actionFetchUsers();
      };

      fetch();
    }
  }, [$user, actionFetchUsers]);
  return <TableComponent users={$user.users || []} />;
};

export default TableContainer;
