import { UserState } from ".";
import * as provider from "./provider";

export interface Actions {
  actionFetchUsers: () => Promise<provider.FetchUsersResponse[]>;
}

export default (
  setUser: React.Dispatch<React.SetStateAction<UserState>>
): Actions => {
  const actionFetchUsers = async () => {
    const users = await provider.fetchUsers();
    setUser((prev: UserState) => ({
      ...prev,
      isLoading: false,
      users
    }));

    return users;
  };

  return {
    actionFetchUsers
  };
};
