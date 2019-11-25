import React, { FunctionComponent } from "react";
import { Input, Label } from "./InputStyle";

interface Props {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FunctionComponent<Props> = ({
  value,
  handleChange
}): JSX.Element => {
  return (
    <Label>
      Search
      <Input value={value} onChange={handleChange} />
    </Label>
  );
};

export default React.memo(InputComponent);
