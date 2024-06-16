import axios from "axios";
import React, { useEffect, useState } from "react";

const FindEmploye = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/v1/api/userdata");
        setUsers(result.data); // Assuming result.data is the array of user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users with role 'employer'
  const employers = users.filter(user => user.role === "employer");
  console.log(employers);

  // Filter based on search query and selected type
  const filteredEmployees = employers.filter((em) => {
    const matchesSearch = em.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          em.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          em.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? em.employment === selectedType : true;
    return matchesSearch && matchesType;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='mt-10 max-w-6xl mx-auto'>
      <div className="mb-4 flex justify-center">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-base-300 p-2 rounded-2xl mr-2"
        />
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-base-300 p-2 rounded-2xl"
        >
          <option value="">Select type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-2 textw">
        {currentEmployees.map((em) => (
          <div
            key={em._id}
            className="border border-base-300 shadow-xl rounded-sm p-4 m-2"
          >
            <div className="flex gap-3 items-center mb-2">
              <img className="w-20 bgw h-20 rounded-full" src={em.img || 'default-image.jpg'} alt={em.name} />
              <div>
                <h1 className="text-xl font-bold">{em.name}</h1>
                <h1>{em.role}</h1>
                <h1>{em.location}</h1>
              </div>
            </div>

            <div className="mt-5 pb-6 flex justify-between">
              <div>
                <h1>Preferred Job Type</h1>
                <h2 className="text-xl font-bold">{em.employment}</h2>
              </div>
              <div>
                <h2>Skills</h2>
                <h1 className="text-bold flex flex-col">
                  {em.skill }
                </h1>
              </div>
            </div>
            <button className="btn btn-success flex justify-center">Know More</button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="btn btn-outline mx-1"
        >
          Previous
        </button>
        {
          Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index + 1} 
              onClick={() => handlePageChange(index + 1)} 
              className={`btn btn-outline mx-1 ${currentPage === index + 1 ? 'btn-active' : ''}`}
            >
              {index + 1}
            </button>
          ))
        }
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="btn btn-outline mx-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FindEmploye;
