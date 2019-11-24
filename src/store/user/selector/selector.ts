import { Selectors } from ".";
import { User, UserState } from "../interfaces";

export default ($user: UserState): Selectors => {
  const filterUsers = (filter: string): User[] => {
    if (!$user.users) {
      return [];
    }

    const response = $user.users.filter(({ name, age }) => {
      return name.includes(filter) || age.toString().includes(filter);
    });

    return response;
  };

  return {
    filterUsers
  };
};
