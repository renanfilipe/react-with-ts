// import React, { FunctionComponent } from "react";
import { useState } from "react";
import { useCreateStore } from "../../lib";
import userActions, { Actions } from "./actions";
import userSelectors, { Selectors } from "./selectors";
import initialState from "./initialState";

export interface UserContext extends Actions, Selectors {
  $user: UserState;
}

export interface UserState {
  users?: {
    name: string;
    age: number;
  }[];
  isLoading: boolean;
}

export interface UseCreateStoreResponse {
  (): UserContext;
  Context: React.Context<UserContext>;
  Provider: React.FunctionComponent<{}>;
}

const UserStore = (useCreateStore(() => {
  const [$user, setUser] = useState<UserState>(initialState);
  const actions = userActions(setUser);
  const selectors = userSelectors($user);
  const response = { $user, ...actions, ...selectors };
  return response;
}) as unknown) as UseCreateStoreResponse;

export const useUser = () => UserStore();
export const UserContext = UserStore.Context;
export const UserProvider = UserStore.Provider;
