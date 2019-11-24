import * as provider from "./provider";
import { UserState } from ".";

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
      users,
      isLoading: false
    }));

    return users;
  };

  return {
    actionFetchUsers
  };
};
