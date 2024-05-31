import React from "react";
import data from "../../data/findemployee.json";
const FindEmploye = () => {

  console.log(data);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((em, index) => (
          <div
            key={index}
            className="border border-base-300 shadow-xl rounded-sm p-4 m-2"
          >
            <div className="flex gap-3 items-center mb-2">
              <img className="w-20 h-20 rounded-full" src={em.img} alt="" />
              <div>
                <h1 className="text-xl font-bold">{em.name}</h1>
                <h1>{em.role}</h1>
                <h1>{em.location}</h1>
              </div>
            </div>

          <div className="mt-5 pb-6 flex justify-between">
           <div>
           <h1>Preffer Job Type</h1>
            <h2 className="text-xl font-bold">{em.employment}</h2>
           </div>
           <div>
            <h2>Skills</h2>
            <h1 className="text-bold flex flex-col">{
                em.skill
                }</h1>
           </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindEmploye;
