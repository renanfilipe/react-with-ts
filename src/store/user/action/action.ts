import { Actions } from ".";
import { UserState } from "../interfaces";
import * as provider from "../provider";

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
