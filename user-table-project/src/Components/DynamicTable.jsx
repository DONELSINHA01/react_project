import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import Table from "./Table";
import Pagination from "./Paginations";
import { Link } from "react-router-dom";


const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterDataByTitle();
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setTableData(jsonData);
      setTotalPages(Math.ceil(jsonData.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterDataByTitle = () => {
    if (searchTerm) {
      const filteredData = tableData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTableData(filteredData);
      setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
      setCurrentPage(1);
    } else {
      fetchData();
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  return (
    <div className="dynamic-table-container" style={{padding:'20px'}}>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
      <Table data={currentData} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default DynamicTable;
