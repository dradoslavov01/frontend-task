import React from "react";

import { generatePaginationOptions } from "src/utils/paginationOptions";

import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  setCurrentPage,
  pageSize,
  data,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {generatePaginationOptions(
          data,
          pageSize,
          currentPage,
          setCurrentPage,
        )?.map((option, index) => {
          return (
            <div
              className={[
                styles.paginationOption,
                currentPage === option?.value && styles.selected,
              ].join(" ")}
              key={index}
              onClick={() => setCurrentPage(option?.value)}
            >
              {option?.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
