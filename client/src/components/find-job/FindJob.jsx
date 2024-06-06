import React, { useState } from 'react';
import data from "../../data/jobdata.json";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

const FindJob = () => {
    const [expandedJob, setExpandedJob] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const toggleDescription = (index) => {
        if (expandedJob === index) {
            setExpandedJob(null); // Collapse if already expanded
        } else {
            setExpandedJob(index); // Expand the selected job
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const filteredJobs = data.filter((job) => {
        const matchesSearch = job.job_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              job.by_employee_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType ? job.employment === selectedType : true;
        return matchesSearch && matchesType;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='mt-10'>
            <div className="mb-4 flex justify-center">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchQuery} 
                    onChange={handleSearchChange}
                    className="border border-base-300 p-2 rounded-2xl mr-2"
                />
                <select 
                    value={selectedType} 
                    onChange={handleTypeChange}
                    className="border border-base-300 p-2 rounded-2xl"
                >
                    <option value="">Select type</option>
                    <option value="full time">Full-time</option>
                    <option value="part time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                </select>
            </div>

            <div className='grid lg:grid-cols-2 textw'>
                {
                    currentJobs.map((job, index) => (
                        <div key={index} className='border border-base-300 shadow-xl rounded-2xl p-4 m-2'>
                            <div className='flex gap-3 items-center mb-2'>
                                <h1 className='bg-blue-200 bgw p-2 rounded-2xl'>{job.employment}</h1>
                                <h1>{job.job_rate_per_hour}</h1>
                            </div>

                            <h1 className='text-2xl font-semibold'>{job.job_name}</h1>
                            <h2 className='mt-2'>By <span className='text-blue-600'>employer {job.by_employee_name}</span></h2>
                            <p className='mt-2'>
                                {expandedJob === index ? job.job_description : `${job.job_description.substring(0, 100)}...`}
                            </p>
                            <button
                                className='btn btn-success mt-2'
                                onClick={() => toggleDescription(index)}
                            >
                                {expandedJob === index ? 'Show Less' : 'See More'}
                            </button>
                            <div className='flex justify-between mt-6'>
                                <button className='btn btn-outline btn-warning'><CiEdit className='text-xl' /> Edit Article</button>
                                <button className='btn btn-outline btn-error'><RiDeleteBin6Line className='text-xl' /> Delete</button>
                            </div>
                        </div>
                    ))
                }
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

export default FindJob;
