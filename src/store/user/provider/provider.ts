// import { to, Api } from "./../../lib";
import { FetchUsersResponse } from ".";
import mockData from "../../../mockData";

export const fetchUsers = async (): Promise<FetchUsersResponse[]> => {
  // const [error, response] = await to(
  //   Api.get<FetchUsersRequestResponse>("/users")
  // );
  // if (error) {
  //   console.log("Error fetching users:", error.message);
  //   throw error;
  // }

  const response = mockData;
  return response.data;
};
