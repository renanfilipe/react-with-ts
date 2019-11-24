import { to, Api } from "./../../lib";
import { UserState } from ".";

export interface FetchUsersResponse extends UserState {}

export const fetchUsers = async (): Promise<FetchUsersResponse> => {
  const [err, res] = await to(Api.get<FetchUsersResponse>("/users"));
  if (err) {
    console.log("Error fetching users:", err.message);
    throw err;
  }

  return res;
};
