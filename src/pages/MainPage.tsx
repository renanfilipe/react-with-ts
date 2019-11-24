import React, { FunctionComponent } from "react";
import { TableContainer } from "../containers";
import { UserProvider } from "../store";

const Main: FunctionComponent = (): JSX.Element => {
  return <TableContainer />;
};

const MainPage: FunctionComponent = (): JSX.Element => (
  <UserProvider>
    <Main />
  </UserProvider>
);

export default MainPage;
