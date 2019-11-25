import debounce from "lodash.debounce";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import { Input, Pagination } from "../../components";
import { useUser } from "../../store";
import { User } from "../../store/user/interfaces";
import { Table } from "./TableStyle";

const PER_PAGE = 10;

const TableContainer: FunctionComponent = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [localUsers, setLocalUsers] = useState<User[]>([]);
  const [pagedUsers, setPagedUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { $user, actionFetchUsers, filterUsers, getUsersPaginated } = useUser();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  const debouncedFilterUsers = useCallback(
    debounce(() => {
      const filteredUsers = filterUsers(inputValue);
      setLocalUsers(filteredUsers);
      const paginatedUsers = getUsersPaginated(
        filteredUsers,
        PER_PAGE,
        currentPage
      );
      setPagedUsers(paginatedUsers);
      setCurrentPage(0);
    }, 2000),
    [filterUsers, inputValue, debounce, getUsersPaginated]
  );

  const handlePagination = useCallback(
    (selectedItem: { selected: number }): void => {
      setCurrentPage(selectedItem.selected);
      const paginatedUsers = getUsersPaginated(
        localUsers,
        PER_PAGE,
        selectedItem.selected
      );
      setPagedUsers(paginatedUsers);
    },
    [setCurrentPage, getUsersPaginated, localUsers]
  );

  useEffect(() => {
    debouncedFilterUsers();

    return () => {
      debouncedFilterUsers.cancel();
    };
  }, [debouncedFilterUsers]);

  useEffect(() => {
    if ($user.isLoading) {
      const fetch = async () => {
        const fetchedUsers = await actionFetchUsers();
        const paginatedUsers = getUsersPaginated(
          fetchedUsers,
          PER_PAGE,
          currentPage
        );
        setLocalUsers(paginatedUsers);
      };

      fetch();
    }
  }, [$user, actionFetchUsers, getUsersPaginated, currentPage]);

  if ($user.isLoading || pagedUsers.length === 0) {
    return <span>Loading...</span>;
  }

  const pageCount = Math.floor(localUsers.length / PER_PAGE);

  return (
    <>
      <Input value={inputValue} handleChange={handleInputChange} />
      <Table users={pagedUsers || []} />
      <Pagination
        id="table-container"
        pageCount={pageCount}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default React.memo(TableContainer);
