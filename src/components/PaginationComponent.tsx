import React, { FunctionComponent } from "react";
import ReactPaginate from "react-paginate";
import "./PaginationComponent.css";

interface Props {
  pageCount: number;
  handlePagination: (selectedItem: { selected: number }) => void;
  id: string;
}

const PaginationComponent: FunctionComponent<Props> = ({
  handlePagination,
  pageCount,
  id
}): JSX.Element => {
  return (
    <div id={id}>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePagination}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default React.memo(PaginationComponent);
