import React, { FunctionComponent } from "react";
import { Table } from "../containers";
import { UserProvider } from "../store";

const Main: FunctionComponent = (): JSX.Element => {
  return <Table />;
};

const MainPage: FunctionComponent = (): JSX.Element => (
  <UserProvider>
    <Main />
  </UserProvider>
);

export default MainPage;
