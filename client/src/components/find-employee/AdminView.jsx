
import React from 'react';
import img1 from "../../image/User Flow.svg"

const AdminView = () => {
    return (
        <div>
              <div className="mt-6 mb-6 max-w-5xl mx-auto">
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
        necessitatibus, recusandae, saepe laborum exercitationem iure inventore
        quasi qui quidem dolorem omnis ipsum? Doloremque nemo inventore quaerat
        consequatur ipsa harum dolorum, veniam eum explicabo obcaecati velit?
        Similique delectus, dignissimos nesciunt corporis id optio eum? Iusto.
      </h2>

      <div className="mb-4 mt-5 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-base-300 p-2 rounded-2xl mr-2"
        />
        <select className="border border-base-300 p-2 rounded-2xl">
          <option value="">Select type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      <div >
        <img className="mx-auto" src={img1} alt="g" />
      </div>

    </div>
        </div>
    );
};

export default AdminView;