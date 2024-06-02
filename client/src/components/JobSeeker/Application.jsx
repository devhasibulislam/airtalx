/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const Application = () => {
  const data = [
    {
      id: 1,
      employer: "Cy Ganderton",
      jobTitle: "Quality Control Specialist",
      jobType: "Full-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      employer: "Cy Programming",
      jobTitle: "Software Developer",
      jobType: "Part-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      employer: "Brice Swyre",
      jobTitle: "Tax Accountant",
      jobType: "Contract",
      status: "Inactive",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      employer: "Brice Swyre",
      jobTitle: "Tax Accountant",
      jobType: "Contract",
      status: "Inactive",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 5,
      employer: "John Doe",
      jobTitle: "Frontend Developer",
      jobType: "Full-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 6,
      employer: "Jane Smith",
      jobTitle: "Graphic Designer",
      jobType: "Part-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 7,
      employer: "Alice Johnson",
      jobTitle: "Marketing Manager",
      jobType: "Full-time",
      status: "Inactive",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 8,
      employer: "Bob Brown",
      jobTitle: "Project Manager",
      jobType: "Full-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 9,
      employer: "Eva Green",
      jobTitle: "Accountant",
      jobType: "Part-time",
      status: "Inactive",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 10,
      employer: "Michael Johnson",
      jobTitle: "Data Analyst",
      jobType: "Contract",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 11,
      employer: "David Lee",
      jobTitle: "UI/UX Designer",
      jobType: "Full-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 12,
      employer: "Sarah Parker",
      jobTitle: "HR Manager",
      jobType: "Full-time",
      status: "Inactive",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 13,
      employer: "Emily White",
      jobTitle: "Content Writer",
      jobType: "Part-time",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 14,
      employer: "Peter Smith",
      jobTitle: "Software Engineer",
      jobType: "Full-time",
      status: "Inactive",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 15,
      employer: "Olivia Johnson",
      jobTitle: "Product Manager",
      jobType: "Contract",
      status: "Active",
      jobPost: "Lorem ipsum dolor sit amet.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [runningJobs, setRunningJobs] = useState(0);
  const [completeJobs, setCompleteJobs] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Calculate running and complete jobs whenever data changes
    const running = data.filter((item) => item.status === "Active").length;
    const complete = data.filter((item) => item.status === "Inactive").length;
    setRunningJobs(running);
    setCompleteJobs(complete);
  }, [data]);

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
      <div className="flex justify-between">
        <h2>Running Job: {runningJobs}</h2>
        <h2>Total Complete Job: {completeJobs}</h2>
      </div>
      <h2 className="text-right text-xl mt-2 mb-2 font-semibold">
        My Job Application
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 ">No.</th>
              <th className="py-2 px-4 ">Employer</th>
              <th className="py-2 px-4 ">Job Title</th>
              <th className="py-2 px-4 ">Job Type</th>
              <th className="py-2 px-4 ">Status</th>
              <th className="py-2 px-4 ">Job Post</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td className="py-2 px-4 ">{indexOfFirstItem + index + 1}</td>
                <td className="py-2 px-4 ">{item.employer}</td>
                <td className="py-2 px-4 ">{item.jobTitle}</td>
                <td className="py-2 px-4 ">{item.jobType}</td>
                <td className="py-2 px-4 ">{item.status}</td>
                <td className="py-2 px-4 ">{item.jobPost}</td>
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

export default Application;
