import React from "react";
import "../styles/pagination.css";

export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrevbtn}
        disabled={currentPage == pages[0] ? true : false}
      >
        Prev
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={handleNextbtn}
        disabled={currentPage == pages[pages.length - 1] ? true : false}
      >
        Next
      </button>
    </div>
  );
};
