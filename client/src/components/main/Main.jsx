// // Main.js
// import React, { useState } from "react";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { MdOutlineForwardToInbox } from "react-icons/md";
// import { GoInbox } from "react-icons/go";
// import { FaAmazonPay, FaShoppingBag } from "react-icons/fa";
// import { IoLogOutOutline, IoReloadOutline } from "react-icons/io5";

// import FindJob from "../find-job/FindJob";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("Tab1");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-64 bg-gray-100">
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab1" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab1")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <LuLayoutDashboard className="text-2xl" /> Dashboard
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab2" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab2")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <MdOutlineForwardToInbox className="text-2xl" /> Inbox
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab3" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab3")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <GoInbox className="text-2xl" /> Post a Jobs
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab4" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab4")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaShoppingBag className="text-2xl" />Job Applicant
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab5")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <IoReloadOutline className="text-2xl" />My Employee
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab5")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <IoReloadOutline className="text-2xl" />History
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab5")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <IoReloadOutline className="text-2xl" />Payment
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab6")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaAmazonPay className="text-2xl" />User
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab6")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaAmazonPay className="text-2xl" />Post a Blog
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab6")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaAmazonPay className="text-2xl" />Blog
//           </h2>
//         </div>

//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab7" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab7")}
//         >
//           <h2 className="flex gap-2 text-xl text-red-500">
//             <IoLogOutOutline className="text-2xl" />LogOut
//           </h2>
//         </div>
//       </div>
//       <div className="flex-1 p-8 overflow-y-auto">
//         {activeTab === "Tab1" && (
//           <div>
//             <p>Content for Tab 1</p>
//             {/* Simulating long content for demonstration */}
//             <div className="h-96 ">Scrollable content for Tab 1</div>
//           </div>
//         )}
//         {activeTab === "Tab2" && (
//           <div>
//             <p>Content for Tab 2</p>
//             {/* Simulating long content for demonstration */}
//             <div className="h-96 ">Scrollable content for Tab 2</div>
//           </div>
//         )}

//         {activeTab === "Tab3" && (
//           <div>
//             <div className="h-96 ">
//               <FindJob />
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab4" && (
//           <div>
//             <div className="h-96 ">
//              application
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab5" && (
//           <div>
//             <div className="h-96 ">
//              work history
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab6" && (
//           <div>
//             <div className="h-96 ">
//             payment
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// const JobSeekerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("Tab1");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-64 bg-gray-100">
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab1" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab1")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <LuLayoutDashboard className="text-2xl" /> Dashboard
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab2" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab2")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <MdOutlineForwardToInbox className="text-2xl" /> Inbox
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab3" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab3")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <GoInbox className="text-2xl" /> All Jobs
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab4" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab4")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaShoppingBag className="text-2xl" /> Application
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab5")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <IoReloadOutline className="text-2xl" />Work History
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab6")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaAmazonPay className="text-2xl" />Payment
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab7" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab7")}
//         >
//           <h2 className="flex gap-2 text-xl text-red-500">
//             <IoLogOutOutline className="text-2xl" />LogOut
//           </h2>
//         </div>
//       </div>
//       <div className="flex-1 p-8 overflow-y-auto">
//         {activeTab === "Tab1" && (
//           <div>
//             <p>Content for Tab 1</p>
//             {/* Simulating long content for demonstration */}
//             <div className="h-96 ">Scrollable content for Tab 1</div>
//           </div>
//         )}
//         {activeTab === "Tab2" && (
//           <div>
//             <p>Content for Tab 2</p>
//             {/* Simulating long content for demonstration */}
//             <div className="h-96 ">Scrollable content for Tab 2</div>
//           </div>
//         )}

//         {activeTab === "Tab3" && (
//           <div>
//             <div className="h-96 ">
//               <FindJob />
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab4" && (
//           <div>
//             <div className="h-96 ">
//              application
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab5" && (
//           <div>
//             <div className="h-96 ">
//              work history
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab6" && (
//           <div>
//             <div className="h-96 ">
//             payment
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };
// const EmployeeDashboard = () => {
//   const [activeTab, setActiveTab] = useState("Tab1");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-64 bg-gray-100">
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab1" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab1")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <LuLayoutDashboard className="text-2xl" /> Dashboard
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab2" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab2")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <MdOutlineForwardToInbox className="text-2xl" /> Inbox
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab3" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab3")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <GoInbox className="text-2xl" /> All Jobs
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab4" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab4")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaShoppingBag className="text-2xl" /> Application
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab5")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <IoReloadOutline className="text-2xl" />Work History
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab6")}
//         >
//           <h2 className="flex gap-2 text-xl">
//             <FaAmazonPay className="text-2xl" />Payment
//           </h2>
//         </div>
//         <div
//           className={`p-4 cursor-pointer ${
//             activeTab === "Tab7" ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => handleTabClick("Tab7")}
//         >
//           <h2 className="flex gap-2 text-xl text-red-500">
//             <IoLogOutOutline className="text-2xl" />LogOut
//           </h2>
//         </div>
//       </div>
//       <div className="flex-1 p-8 overflow-y-auto">
//         {activeTab === "Tab1" && (
//           <div>
//             <p>Content for Tab 1</p>
//             {/* Simulating long content for demonstration */}
//             <div className="h-96 ">Scrollable content for Tab 1</div>
//           </div>
//         )}
//         {activeTab === "Tab2" && (
//           <div>
//             <p>Content for Tab 2</p>
//             {/* Simulating long content for demonstration */}
//             <div className="h-96 ">Scrollable content for Tab 2</div>
//           </div>
//         )}

//         {activeTab === "Tab3" && (
//           <div>
//             <div className="h-96 ">
//               <FindJob />
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab4" && (
//           <div>
//             <div className="h-96 ">
//              application
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab5" && (
//           <div>
//             <div className="h-96 ">
//              work history
//             </div>
//           </div>
//         )}
//         {activeTab === "Tab6" && (
//           <div>
//             <div className="h-96 ">
//             payment
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export  {JobSeekerDashboard, AdminDashboard , EmployeeDashboard};

// Main.js
import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineForwardToInbox, MdShoppingBag } from "react-icons/md";
import { GoInbox } from "react-icons/go";
import {
  FaAmazonPay,
  FaBookReader,
  FaCcAmazonPay,
  FaHospitalUser,
  FaRegEdit,
  FaSearchengin,
  FaShoppingBag,
} from "react-icons/fa";
import { IoLogOutOutline, IoReloadOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import FindJob from "../find-job/FindJob";
import { BiSolidEditAlt } from "react-icons/bi";
import Application from "../JobSeeker/Application";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 overflow-y-auto">
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab1" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          <h2 className="flex gap-2 text-xl">
            <LuLayoutDashboard className="text-2xl" /> Dashboard
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab2" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          <h2 className="flex gap-2 text-xl">
            <MdOutlineForwardToInbox className="text-2xl" /> Inbox
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab3" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab3")}
        >
          <h2 className="flex gap-2 text-xl">
            <GoInbox className="text-2xl" /> Post a Jobs
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab4" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab4")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaSearchengin className="text-2xl" /> Job Applicant
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <MdShoppingBag className="text-2xl" /> My Jobs
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaHospitalUser className="text-2xl" /> My Employee
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab7" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <IoReloadOutline className="text-2xl" /> History
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab8" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaCcAmazonPay className="text-2xl" /> Payment
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab9" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab6")}
        >
          <h2 className="flex gap-2 text-xl">
            <CiUser className="text-2xl" /> User
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab10" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab6")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaRegEdit className="text-2xl" /> Post a Blog
          </h2>
        </div>

        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab11" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab6")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaBookReader className="text-2xl" /> Blog
          </h2>
        </div>

        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab12" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab6")}
        >
          <h2 className="flex gap-2 text-xl">
            <BsBarChartLine nPay className="text-2xl" /> Goole analytic
          </h2>
        </div>

        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab13" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab6")}
        >
          <h2 className="flex gap-2 text-xl">
            <BiSolidEditAlt className="text-2xl" /> Edit content
          </h2>
        </div>
        <div className={`p-4 cursor-pointer `}>
          <h2 className="flex gap-2 text-xl text-red-500">
            <IoLogOutOutline className="text-2xl" /> LogOut
          </h2>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === "Tab1" && (
          <div>
            <p>Content for Tab 1</p>
            {/* Simulating long content for demonstration */}
            <div className="h-96 ">Scrollable content for Tab 1</div>
          </div>
        )}
        {activeTab === "Tab2" && (
          <div>
            <p>Content for Tab 2</p>
            {/* Simulating long content for demonstration */}
            <div className="h-96 ">Scrollable content for Tab 2</div>
          </div>
        )}
        {activeTab === "Tab3" && (
          <div>
            <div className="h-96 ">
              <FindJob />
            </div>
          </div>
        )}
        {activeTab === "Tab4" && (
          <div>
            <div className="h-96 ">application</div>
          </div>
        )}
        {activeTab === "Tab5" && (
          <div>
            <div className="h-96 ">work history</div>
          </div>
        )}
        {activeTab === "Tab6" && (
          <div>
            <div className="h-96 ">payment</div>
          </div>
        )}
      </div>
    </div>
  );
};

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
        <div className="w-64 bg-gray-100 overflow-y-auto">
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab1" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          <h2 className="flex gap-2 text-xl">
            <LuLayoutDashboard className="text-2xl" /> Dashboard
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab2" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          <h2 className="flex gap-2 text-xl">
            <MdOutlineForwardToInbox className="text-2xl" /> Inbox
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab3" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab3")}
        >
          <h2 className="flex gap-2 text-xl">
            <GoInbox className="text-2xl" /> Post a Jobs
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab4" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab4")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaSearchengin className="text-2xl" /> Job Applicant
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <MdShoppingBag className="text-2xl" /> My Jobs
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaHospitalUser className="text-2xl" /> My Employee
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab7" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <IoReloadOutline className="text-2xl" /> History
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab8" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaCcAmazonPay className="text-2xl" /> Billing
          </h2>
        </div>

       


        <div className={`p-4 cursor-pointer `}>
          <h2 className="flex gap-2 text-xl text-red-500">
            <IoLogOutOutline className="text-2xl" /> LogOut
          </h2>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === "Tab1" && (
          <div>
            <p>Content for Tab 1</p>
            {/* Simulating long content for demonstration */}
            <div className="h-96 ">Scrollable content for Tab 1</div>
          </div>
        )}
        {activeTab === "Tab2" && (
          <div>
            <p>Content for Tab 2</p>
            {/* Simulating long content for demonstration */}
            <div className="h-96 ">Scrollable content for Tab 2</div>
          </div>
        )}
        {activeTab === "Tab3" && (
          <div>
            <div className="h-96 ">
              <FindJob />
            </div>
          </div>
        )}
        {activeTab === "Tab4" && (
          <div>
            <div className="h-96 ">application</div>
          </div>
        )}
        {activeTab === "Tab5" && (
          <div>
            <div className="h-96 ">work history</div>
          </div>
        )}
        {activeTab === "Tab6" && (
          <div>
            <div className="h-96 ">payment</div>
          </div>
        )}
      </div>
    </div>
  );
};

const JobSeekerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 overflow-y-auto">
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab1" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          <h2 className="flex gap-2 text-xl">
            <LuLayoutDashboard className="text-2xl" /> Dashboard
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab2" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          <h2 className="flex gap-2 text-xl">
            <MdOutlineForwardToInbox className="text-2xl" /> Inbox
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab3" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab3")}
        >
          <h2 className="flex gap-2 text-xl">
            <GoInbox className="text-2xl" /> All Jobs
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab4" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab4")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaShoppingBag className="text-2xl" /> Application
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab5" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab5")}
        >
          <h2 className="flex gap-2 text-xl">
            <IoReloadOutline className="text-2xl" /> Work History
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab6" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab6")}
        >
          <h2 className="flex gap-2 text-xl">
            <FaAmazonPay className="text-2xl" /> Payment
          </h2>
        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "Tab7" ? "bg-gray-300 font-bold" : ""
          }`}
          onClick={() => handleTabClick("Tab7")}
        >
          <h2 className="flex gap-2 text-xl text-red-500">
            <IoLogOutOutline className="text-2xl" /> LogOut
          </h2>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === "Tab1" && (
          <div>
            <p>Content for Tab 1</p>
            {/* Simulating long content for demonstration */}
            <div className="h-96 ">Scrollable content for Tab 1</div>
          </div>
        )}
        {activeTab === "Tab2" && (
          <div>
            <p>Content for Tab 2</p>
            {/* Simulating long content for demonstration */}
            <div className="h-96 ">Scrollable content for Tab 2</div>
          </div>
        )}
        {activeTab === "Tab3" && (
          <div>
            <div className="h-96 ">
              <FindJob />
            </div>
          </div>
        )}
        {activeTab === "Tab4" && (
          <div>
            <div className="h-96 ">
              <Application/>
            </div>
          </div>
        )}
        {activeTab === "Tab5" && (
          <div>
            <div className="h-96 ">work history</div>
          </div>
        )}
        {activeTab === "Tab6" && (
          <div>
            <div className="h-96 ">payment</div>
          </div>
        )}
      </div>
    </div>
  );
};



export { JobSeekerDashboard, AdminDashboard, EmployeeDashboard };
