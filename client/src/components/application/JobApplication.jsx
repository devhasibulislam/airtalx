/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const JobApplication = () => {
    const data = [
        {
          id: 1,
          jobseeker_name: "devid",
          jobseeker_posting_title: "job title 1",
          job_type: "full-time",
          email_proposal: "link1",
          date: "1/2/2024",
          status:"Awaiting Review"
        },
        {
          id: 2,
          jobseeker_name: "Jon",
          jobseeker_posting_title: "job title 2",
          job_type: "part-time",
          email_proposal: "link2",
          date: "1/3/2024",
          status:'reviewed'
        },
        {
          id: 3,
          jobseeker_name: "gita",
          jobseeker_posting_title: "job title 3",
          job_type: "full-time",
          email_proposal: "link3",
          date: "4/2/2024",
          status:'reviewed'
        },
        {
          id: 1,
          jobseeker_name: "devid",
          jobseeker_posting_title: "job title 1",
          job_type: "full-time",
          email_proposal: "link1",
          date: "1/2/2024",
          status:"Awaiting Review"
        },
        {
          id: 2,
          jobseeker_name: "Jon",
          jobseeker_posting_title: "job title 2",
          job_type: "part-time",
          email_proposal: "link2",
          date: "1/3/2024",
          status:'reviewed'
        },
        {
          id: 3,
          jobseeker_name: "gita",
          jobseeker_posting_title: "job title 3",
          job_type: "full-time",
          email_proposal: "link3",
          date: "4/2/2024",
          status:'reviewed'
        },
        {
          id: 1,
          jobseeker_name: "devid",
          jobseeker_posting_title: "job title 1",
          job_type: "full-time",
          email_proposal: "link1",
          date: "1/2/2024",
          status:"Awaiting Review"
        },
        {
          id: 2,
          jobseeker_name: "Jon",
          jobseeker_posting_title: "job title 2",
          job_type: "part-time",
          email_proposal: "link2",
          date: "1/3/2024",
          status:'reviewed'
        },
        {
          id: 3,
          jobseeker_name: "gita",
          jobseeker_posting_title: "job title 3",
          job_type: "full-time",
          email_proposal: "link3",
          date: "4/2/2024",
          status:'reviewed'
        },
      ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Logic for displaying current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
              <th className="py-2 px-4 ">No.</th>
              <th className="py-2 px-4 ">Jobseeker Name</th>
              <th className="py-2 px-4 ">Job Posting Title</th>
              <th className="py-2 px-4 ">Job Type</th>
              <th className="py-2 px-4 ">Application Email 
Proposal Link</th>
              <th className="py-2 px-4 ">Status</th>
              <th className="py-2 px-4 ">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
              <td className="py-2 px-4 ">{indexOfFirstItem + index + 1}</td>
              <td className="py-2 px-4 ">{item.jobseeker_name}</td>
              <td className="py-2 px-4 ">{item.jobseeker_posting_title}</td>
              <td className="py-2 px-4 ">{item.email_proposal}</td>
              <td className="py-2 px-4 ">{item.date}</td>
              <td className="py-2 px-4 ">{item.status}</td>
              <td className="py-2 px-4 ">{item.date}</td>
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
