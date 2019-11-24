import React, { FunctionComponent } from "react";
import { useState } from "react";
// import { useCreateStore } from "../../lib";
import userActions, { Actions } from "./actions";
import userSelectors, { Selectors } from "./selectors";
import initialState from "./initialState";

export interface UserContext extends Actions, Selectors {
  $user: UserState;
}

export interface UserState {
  data: {
    name: string;
    age: number;
  }[];
  message: string;
  status: boolean;
}

const UserStore = useCreateStore(() => {
  const [$user, setUser] = useState<UserState>(initialState);
  const actions = userActions(setUser);
  const selectors = userSelectors($user);
  const response = { $user, ...actions, ...selectors };
  return response;
});

export const useUser = () => UserStore();
export const UserContext = UserStore.Context;
export const UserProvider = UserStore.Provider;

export function useCreateStore(useValue: Function) {
  const Context = React.createContext(undefined);
  const Provider: FunctionComponent = (props): JSX.Element => {
    const { children } = props;
    const value = useValue(props);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = () => React.useContext(Context);

  useContext.Context = Context;

  useContext.Provider = Provider;

  return useContext;
}
