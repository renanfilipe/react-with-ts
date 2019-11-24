import * as provider from "./provider";
import { UserState } from ".";

export interface Actions {
  actionFetchUsers: () => Promise<provider.FetchUsersResponse>;
}

export default (
  setUser: React.Dispatch<React.SetStateAction<UserState>>
): Actions => {
  const actionFetchUsers = async () => {
    const data = await provider.fetchUsers();
    setUser(data);

    return data;
  };

  return {
    actionFetchUsers
  };
};
