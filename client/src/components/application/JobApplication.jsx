/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";

const JobApplication = () => {
  // Updated data with unique entries
  const [data, setData] = useState([]);

  const getJobApplications = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_API}/application`
    );
    setData(response?.data);
  };

  useEffect(() => {
    getJobApplications();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Logic for displaying current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-2">Hello, Here’s what’s going on</h2>
      <div className="flex justify-between mt-5 mb-5">
        <h2>Total Job Posted: 0</h2>
        <h2>Total Job Open: 0</h2>
        <h2>Total Job Close: 0</h2>
        <h2>Total Job Filled: 0</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">No.</th>
              <th className="py-2 px-4">Jobseeker Name</th>
              <th className="py-2 px-4">Job Posting Title</th>
              <th className="py-2 px-4">Job Type</th>
              {/* <th className="py-2 px-4">Application Email Proposal Link</th> */}
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td className="py-2 px-4">{indexOfFirstItem + index + 1}</td>
                <td className="py-2 px-4">{item.employer_name}</td>
                <td className="py-2 px-4">{item.job_title}</td>
                <td className="py-2 px-4">{item.job_type}</td>
                {/* <td className="py-2 px-4">{item.email_proposal}</td> */}
                <td className="py-2 px-4">{item.createdAt}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`mx-1 px-3 py-1 border ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobApplication;
