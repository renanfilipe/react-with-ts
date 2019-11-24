import { Selectors } from ".";
import { User, UserState } from "../interfaces";

export default ($user: UserState): Selectors => {
  const filterUsers = (filter: string): User[] => {
    if (!$user.users) {
      return [];
    }

    if (filter === "") {
      return $user.users;
    }

    const lowerCasedFilter = filter.toLowerCase();

    return $user.users.filter(
      ({ name, age }) =>
        name.toLowerCase().includes(lowerCasedFilter) ||
        age.toString().includes(filter)
    );
  };

  const getUsersPaginated = (
    users: User[],
    perPage: number,
    pageNumber: number
  ): User[] => {
    if (!users || users.length === 0) {
      return [];
    }
    const response = users.slice(
      perPage * pageNumber,
      perPage * pageNumber + perPage
    );

    return response;
  };

  return {
    filterUsers,
    getUsersPaginated
  };
};
