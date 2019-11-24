import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import { InputComponent, TableComponent } from "../components";
import { useUser } from "../store";

const TableContainer: FunctionComponent = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const { $user, actionFetchUsers, filterUsers } = useUser();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  useEffect(() => {
    if ($user.isLoading) {
      console.log("rodou use effect");
      const fetch = async () => {
        await actionFetchUsers();
      };

      fetch();
    }
  }, [$user, actionFetchUsers]);

  const users = filterUsers(inputValue);

  return (
    <div>
      <InputComponent value={inputValue} handleChange={handleInputChange} />
      <TableComponent users={users || []} />
    </div>
  );
};

export default React.memo(TableContainer);
