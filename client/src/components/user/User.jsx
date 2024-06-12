/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

const User = () => {
  const data = [
    {
      id: 1,
      name: "Cy Ganderton",
      email: "gardi@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Employee",
    },
    {
      id: 3,
      name: "Jamie Smith",
      email: "jamie.smith@example.com",
      role: "Jobseeker",
    },
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor.brown@example.com",
      role: "Employee",
    },
    {
      id: 5,
      name: "Jordan Lee",
      email: "jordan.lee@example.com",
      role: "Jobseeker",
    },
    {
      id: 6,
      name: "Casey Davis",
      email: "casey.davis@example.com",
      role: "Admin",
    },
    {
      id: 7,
      name: "Riley Miller",
      email: "riley.miller@example.com",
      role: "Employee",
    },
    {
      id: 8,
      name: "Morgan Wilson",
      email: "morgan.wilson@example.com",
      role: "Jobseeker",
    },
    {
      id: 9,
      name: "Chris Moore",
      email: "chris.moore@example.com",
      role: "Employee",
    },
    {
      id: 10,
      name: "Alex Taylor",
      email: "alex.taylor@example.com",
      role: "Jobseeker",
    },
    {
      id: 11,
      name: "Sam Anderson",
      email: "sam.anderson@example.com",
      role: "Admin",
    },
    {
      id: 12,
      name: "Dana Thomas",
      email: "dana.thomas@example.com",
      role: "Employee",
    },
    {
      id: 13,
      name: "Avery Jackson",
      email: "avery.jackson@example.com",
      role: "Jobseeker",
    },
    {
      id: 14,
      name: "Cameron White",
      email: "cameron.white@example.com",
      role: "Employee",
    },
    {
      id: 15,
      name: "Dakota Harris",
      email: "dakota.harris@example.com",
      role: "Jobseeker",
    },
    {
      id: 16,
      name: "Jesse Martin",
      email: "jesse.martin@example.com",
      role: "Admin",
    },
    {
      id: 17,
      name: "Taylor Thompson",
      email: "taylor.thompson@example.com",
      role: "Employee",
    },
    {
      id: 18,
      name: "Jordan Martinez",
      email: "jordan.martinez@example.com",
      role: "Jobseeker",
    },
    {
      id: 19,
      name: "Blake Robinson",
      email: "blake.robinson@example.com",
      role: "Employee",
    },
    {
      id: 20,
      name: "Casey Clark",
      email: "casey.clark@example.com",
      role: "Admin",
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">No.</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td className="py-2 px-4">{indexOfFirstItem + index + 1}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td
                  className={`py-2 px-4 ${
                    item.role === "Admin"
                      ? "text-green-600"
                      : item.role === "Employee"
                      ? "text-red-400"
                      : "text-blue-600"
                  }`}
                >
                  {item.role}
                </td>
                <td className="py-2 px-4 flex gap-2 flex-wrap">
                  <button className="btn btn-sm btn-success">Make Admin</button>
                  <button className="btn btn-sm btn-outline btn-error">
                    <RiDeleteBin6Fill className="text-xl" />
                  </button>
                  <button className="btn btn-sm btn-outline btn-warning">
                    <IoWarningOutline className="text-xl" /> Suspend User
                  </button>
                  <h2 className="text-blue-600">Verify</h2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4 flex-wrap">
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

export default User;
