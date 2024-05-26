import React from 'react';
import img1 from "../../Image/landingpage/Global.png"
const Landingpage = () => {
    return (
        <div> 
         <div className='md:grid grid-cols-2 p-3'>
            <div>
                <h1 className='text-4xl mb-2 font-semibold'>One of the Trusted Talent Marketplaces in the Philippines.</h1>
                <p className='mb-2'>Experience where talent meets opportunity, on a global scale.</p>
                <button className='btn btn-sm btn-warning'>Get Started</button>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
         </div>
        </div>
    );
};

export default Landingpage;