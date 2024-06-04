import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

const AdminBlog = () => {
    const data = [
        {
            "id": 1,
            "title": "This is title 1",
            "description": "This is description 1 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "1/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 2,
            "title": "This is title 2",
            "description": "This is description 2 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "2/2/2024",
            "createdBy": "employee"
        },
        {
            "id": 3,
            "title": "This is title 3",
            "description": "This is description 3 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "3/2/2024",
            "createdBy": "jobseeker"
        },
        {
            "id": 4,
            "title": "This is title 4",
            "description": "This is description 4 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "4/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 5,
            "title": "This is title 5",
            "description": "This is description 5 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "5/2/2024",
            "createdBy": "employee"
        },
        {
            "id": 6,
            "title": "This is title 6",
            "description": "This is description 6 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "6/2/2024",
            "createdBy": "jobseeker"
        },
        {
            "id": 7,
            "title": "This is title 7",
            "description": "This is description 7 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "7/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 8,
            "title": "This is title 8",
            "description": "This is description 8 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "8/2/2024",
            "createdBy": "employee"
        },
        {
            "id": 9,
            "title": "This is title 9",
            "description": "This is description 9 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "9/2/2024",
            "createdBy": "jobseeker"
        },
        {
            "id": 10,
            "title": "This is title 10",
            "description": "This is description 10 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "10/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 11,
            "title": "This is title 11",
            "description": "This is description 11 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "11/2/2024",
            "createdBy": "employee"
        },
        {
            "id": 12,
            "title": "This is title 12",
            "description": "This is description 12 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "12/2/2024",
            "createdBy": "jobseeker"
        },
        {
            "id": 13,
            "title": "This is title 13",
            "description": "This is description 13 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "13/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 14,
            "title": "This is title 14",
            "description": "This is description 14 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "14/2/2024",
            "createdBy": "employee"
        },
        {
            "id": 15,
            "title": "This is title 15",
            "description": "This is description 15 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "15/2/2024",
            "createdBy": "jobseeker"
        },
        {
            "id": 16,
            "title": "This is title 16",
            "description": "This is description 16 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "16/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 17,
            "title": "This is title 17",
            "description": "This is description 17 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "17/2/2024",
            "createdBy": "employee"
        },
        {
            "id": 18,
            "title": "This is title 18",
            "description": "This is description 18 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "18/2/2024",
            "createdBy": "jobseeker"
        },
        {
            "id": 19,
            "title": "This is title 19",
            "description": "This is description 19 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "19/2/2024",
            "createdBy": "admin"
        },
        {
            "id": 20,
            "title": "This is title 20",
            "description": "This is description 20 with 200 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris ultricies, justo eu convallis placerat, felis enim.",
            "date": "20/2/2024",
            "createdBy": "employee"
        }
    ]
    
    return (
        <div className='grid md:grid-cols-2 gap-3'>
       {
        data.map(m=>(
            <div className='border-2 border-base-300 rounded-2xl p-3'>
               <h2 className='text-3xl font-semibold mt-3'> {m.title}</h2>
              <div className='flex justify-between mt-6'>
                <h2 className='text-blue-500'>By {m.createdBy}</h2>
                <h2 className='text-purple-500'>{m.date}</h2>
              </div>
              <div className='flex justify-between mt-6'>
                <button className='btn btn-outline btn-warning'><CiEdit className='text-xl' /> Edit Article</button>
                <button className='btn btn-outline btn-error'><RiDeleteBin6Line className='text-xl' /> Delete</button>
              </div>
            </div>
        ))
       }
        </div>
    );
};

export default AdminBlog;