import React from "react";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  const tableStyles = {
    borderCollapse: "collapse",
    width: "100%",
    
  };

  const thStyles = {
    backgroundColor: "#00BFFF",
    color:'white',
    fontWeight: "bold",
    padding: "8px",
    textAlign: "left",
    
  };

  const tdStyles = {
    borderBottom: "1px solid #87CEEB",
    padding: "8px",
    textAlign: "left",
    
  };

  const renderTableHeaders = () => {
    if (data.length === 0) {
      return (
        <>
          <th style={thStyles}>ID</th>
          <th style={thStyles}>Body</th>
        </>
      );
    } else {
      return (
        <>
          <th style={thStyles}>ID</th>
          <th style={thStyles}>Title</th>
          <th style={thStyles}>Body</th>
          <th style={thStyles}>User ID</th>
        </>
      );
    }
  };

  const renderTableData = () => {
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="4" style={tdStyles}>
            No data available
          </td>
        </tr>
      );
    } else {
      return data.map((item) => (
        <tr key={item.id}>
          <td style={tdStyles}>
            <Link to={`/comments/${item.id}`}>{item.id}</Link>
          </td>
          {data.length === 0 ? (
            <td colSpan="3" style={tdStyles}>
              {item.body}
            </td>
          ) : (
            <>
              <td style={tdStyles}>{item.title}</td>
              <td style={tdStyles}>{item.body}</td>
              <td style={tdStyles}>{item.userId}</td>
            </>
          )}
        </tr>
      ));
    }
  };
  

  return (
    <table style={tableStyles}>
      <thead>
        <tr>{renderTableHeaders()}</tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default Table;
