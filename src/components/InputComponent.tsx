import React, { FunctionComponent } from "react";

interface Props {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FunctionComponent<Props> = ({
  value,
  handleChange
}): JSX.Element => {
  return (
    <label>
      Search
      <input value={value} onChange={handleChange} />
    </label>
  );
};

export default InputComponent;
