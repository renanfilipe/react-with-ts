import React, { FunctionComponent, useEffect } from "react";
import { useUser } from "./../store";

const Table: FunctionComponent = (): JSX.Element => {
  const { $user, actionFetchUsers } = useUser();

  useEffect(() => {
    if (!$user.status) {
      console.log("rodou use effect");
      const fetch = async () => {
        await actionFetchUsers();
      };

      fetch();
    }
  }, [$user, actionFetchUsers]);

  return <div>{$user}</div>;
};

export default Table;
