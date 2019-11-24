import { FetchUsersResponse } from "../provider/interface";

export interface Actions {
  actionFetchUsers: () => Promise<FetchUsersResponse[]>;
}
