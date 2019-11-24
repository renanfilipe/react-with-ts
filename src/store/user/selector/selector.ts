import { Selectors } from ".";
import { User, UserState } from "../interfaces";

export default ($user: UserState): Selectors => {
  const filterUsers = (filter: string): User[] => {
    if (!$user.users) {
      return [];
    }

    const lowerCasedFilter = filter.toLowerCase();

    return $user.users.filter(
      ({ name, age }) =>
        name.toLowerCase().includes(lowerCasedFilter) ||
        age.toString().includes(filter)
    );
  };

  return {
    filterUsers
  };
};
