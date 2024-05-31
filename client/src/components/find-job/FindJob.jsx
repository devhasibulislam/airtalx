import React, { useState } from 'react';
import data from "../../data/jobdata.json";

const FindJob = () => {
    const [expandedJob, setExpandedJob] = useState(null);

    const toggleDescription = (index) => {
        if (expandedJob === index) {
            setExpandedJob(null); // Collapse if already expanded
        } else {
            setExpandedJob(index); // Expand the selected job
        }
    };

    return (
        <div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {
            data.map((job, index) => (
                <div key={index} className='border border-base-300 shadow-xl rounded-sm p-4 m-2'>
                   <div className='flex gap-3 items-center mb-2'>
                       <h1 className='bg-blue-200 p-2 rounded-2xl'>{job.employment}</h1>
                       <h1>{job.job_rate_per_hour}</h1>
                   </div>

                  <h1 className='text-2xl font-semibold'>{job.job_name}</h1>
                  <h2 className='mt-2'>By <span className='text-blue-600'>employer {job.by_employee_name}</span></h2>
                  <p className='mt-2'>
                      {expandedJob === index ? job.job_description : `${job.job_description.substring(0, 100)}...`}
                  </p>
                  <button
                      className='btn btn-primary mt-2'
                      onClick={() => toggleDescription(index)}
                  >
                      {expandedJob === index ? 'Show Less' : 'See More'}
                  </button>
                </div>
            ))
          }
          </div>
        </div>
    );
};

export default FindJob;
