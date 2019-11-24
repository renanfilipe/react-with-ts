import { User } from "../interfaces";

// tslint:disable-next-line: no-empty-interface
export interface Selectors {
  filterUsers: (filter: string) => User[];
  getUsersPaginated: (
    users: User[],
    perPage: number,
    pageNumber: number
  ) => User[];
}
