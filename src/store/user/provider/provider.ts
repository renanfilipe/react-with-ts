import { FetchUsersRequestResponse, FetchUsersResponse } from ".";
import { Api, to } from "../../../lib";

export const fetchUsers = async (): Promise<FetchUsersResponse[]> => {
  const [error, response] = await to(
    Api.get<FetchUsersRequestResponse>("/users")
  );
  if (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }

  return response.data;
};
