import { useState } from "react";
import { useCreateStore } from "../../lib";
import { userActions } from "./action";
import initialState from "./initialState";
import { UseCreateStoreResponse, UserState } from "./interfaces";
import { userSelectors } from "./selector";

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
