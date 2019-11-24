import React, { FunctionComponent } from "react";

interface Props {
  currentPage: number;
  pageCount: number;
}

const HeaderComponent: FunctionComponent<Props> = ({
  currentPage,
  pageCount
}): JSX.Element => {
  return (
    <div>
      <h6>Current Page: {currentPage}</h6>
      <h6>Page Count: {pageCount}</h6>
    </div>
  );
};

export default React.memo(HeaderComponent);
