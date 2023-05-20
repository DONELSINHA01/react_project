import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const containerStyles = {
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
    flexWrap: "wrap",
    width: "100%",
  };

  const buttonStyles = {
    padding: "8px 12px",
    margin: "0 4px",
    border: "1px solid #ccc",
    borderRadius: "50px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "black",
  };

  const activeButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#ddd",
  };

  const previousButtonStyles = {
    ...buttonStyles,
    
    marginRight: "8px",
  };

  const nextButtonStyles = {
    ...buttonStyles,
    marginLeft: "8px",
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          style={i === currentPage ? activeButtonStyles : buttonStyles}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div style={containerStyles}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={previousButtonStyles}
      >
        Previous
      </button>
      {renderPagination()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={nextButtonStyles}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
