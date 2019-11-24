// import { to, Api } from "./../../lib";
import mockData from "../../mockData";
export interface FetchUsersRequestResponse {
  data: Array<{
    name: string;
    age: number;
  }>;
  status: boolean;
  message: string;
}

export interface FetchUsersResponse {
  name: string;
  age: number;
}

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
