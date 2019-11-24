import { Actions } from "./action/interface";
import { Selectors } from "./selector/interface";

export interface UserContext extends Actions, Selectors {
  $user: UserState;
}

export interface UserState {
  users?: User[];
  isLoading: boolean;
  isFiltering: boolean;
}

export interface User {
  name: string;
  age: number;
}

export interface UseCreateStoreResponse {
  (): UserContext;
  Context: React.Context<UserContext>;
  Provider: React.FunctionComponent<{}>;
}
