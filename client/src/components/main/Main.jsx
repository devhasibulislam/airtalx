
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
import { BiSolidEditAlt } from "react-icons/bi";

import FindJob from "../find-job/FindJob";
import Application from "../JobSeeker/Application";
import FindEmploye from "../find-employee/FindEmploye";
import Dashboard from "../admin/dashboard/Dashboard";
import Payment from "../JobSeeker/Payment";
import WorkHistory from "../workhistory/WorkHistory";

// Tab data
const adminTabs = [
  { id: "Tab1", label: "Dashboard", icon: LuLayoutDashboard },
  { id: "Tab2", label: "Inbox", icon: MdOutlineForwardToInbox },
  { id: "Tab3", label: "Post a Jobs", icon: GoInbox },
  { id: "Tab4", label: "Job Applicant", icon: FaSearchengin },
  { id: "Tab5", label: "My Jobs", icon: MdShoppingBag },
  { id: "Tab6", label: "My Employee", icon: FaHospitalUser },
  { id: "Tab7", label: "History", icon: IoReloadOutline },
  { id: "Tab8", label: "Payment", icon: FaCcAmazonPay },
  { id: "Tab9", label: "User", icon: CiUser },
  { id: "Tab10", label: "Post a Blog", icon: FaRegEdit },
  { id: "Tab11", label: "Blog", icon: FaBookReader },
  { id: "Tab12", label: "Google Analytics", icon: BsBarChartLine },
  { id: "Tab13", label: "Edit Content", icon: BiSolidEditAlt },
];

const employerTabs = [
  { id: "Tab1", label: "Dashboard", icon: LuLayoutDashboard },
  { id: "Tab2", label: "Inbox", icon: MdOutlineForwardToInbox },
  { id: "Tab3", label: "Post a Jobs", icon: GoInbox },
  { id: "Tab4", label: "Job Applicant", icon: FaSearchengin },
  { id: "Tab5", label: "My Jobs", icon: MdShoppingBag },
  { id: "Tab6", label: "My Employee", icon: FaHospitalUser },
  { id: "Tab7", label: "History", icon: IoReloadOutline },
  { id: "Tab8", label: "Billing", icon: FaCcAmazonPay },
];

const jobSeekerTabs = [
  { id: "Tab1", label: "Dashboard", icon: LuLayoutDashboard },
  { id: "Tab2", label: "Inbox", icon: MdOutlineForwardToInbox },
  { id: "Tab3", label: "All Jobs", icon: GoInbox },
  { id: "Tab4", label: "Application", icon: FaShoppingBag },
  { id: "Tab5", label: "Work History", icon: IoReloadOutline },
  { id: "Tab6", label: "Payment", icon: FaAmazonPay },
];

// Sidebar component
const Sidebar = ({ tabs, activeTab, handleTabClick }) => (
  <div className="w-20 md:w-52 rounded-md bg-gray-100 overflow-y-auto">
    {tabs.map((tab) => (
      <div
        key={tab.id}
        className={`p-4 cursor-pointer ${
          activeTab === tab.id ? "bg-gray-300 font-bold" : ""
        }`}
        onClick={() => handleTabClick(tab.id)}
      >
        <h2 className="flex items-center max-md:justify-center gap-2 text-[18px]">
          <tab.icon className=" text-2xl md:text-xl" />
          <span className="hidden md:inline">{tab.label}</span>
        </h2>
      </div>
    ))}
    <div className="p-4 cursor-pointer">
      <h2 className="flex items-center max-md:justify-center gap-2 text-[18px] text-red-500">
        <IoLogOutOutline className="text-2xl md:text-xl" /> <span className="hidden md:inline">LogOut</span>
      </h2>
    </div>
  </div>
);

// Dashboard Layout
const DashboardLayout = ({ tabs, activeTab, handleTabClick, children }) => (
  <div className="flex h-screen">
    <Sidebar tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
    <div className="flex-1 p-8 overflow-y-auto">{children}</div>
  </div>
);

// Admin Dashboard
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout tabs={adminTabs} activeTab={activeTab} handleTabClick={handleTabClick}>
      {activeTab === "Tab1" && <Dashboard />}
      {activeTab === "Tab2" && <p>Content for Tab 2</p>}
      {activeTab === "Tab3" && <FindJob />}
      {activeTab === "Tab4" && <div>application</div>}
      {activeTab === "Tab5" && <FindJob />}
      {activeTab === "Tab6" && <FindEmploye />}
      {activeTab === "Tab7" && <WorkHistory />}
      {activeTab === "Tab8" && <Payment />}
      {/* Add more content for other tabs as needed */}
    </DashboardLayout>
  );
};

// Employee Dashboard
const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout tabs={employerTabs} activeTab={activeTab} handleTabClick={handleTabClick}>
      {activeTab === "Tab1" && <p><Dashboard/></p>}
      {activeTab === "Tab2" && <p>Content for Tab 2</p>}
      {activeTab === "Tab3" && <FindJob />}
      {activeTab === "Tab4" && <div>application</div>}
      {activeTab === "Tab5" && <FindJob />}
      {activeTab === "Tab6" && <FindEmploye />}
      {activeTab === "Tab7" && <WorkHistory />}
      {/* Add more content for other tabs as needed */}
    </DashboardLayout>
  );
};

// Job Seeker Dashboard
const JobSeekerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout tabs={jobSeekerTabs} activeTab={activeTab} handleTabClick={handleTabClick}>
      {activeTab === "Tab1" && <p><Dashboard/></p>}
      {activeTab === "Tab2" && <p>Content for Tab 2</p>}
      {activeTab === "Tab3" && <FindJob />}
      {activeTab === "Tab4" && <Application />}
      {activeTab === "Tab5" && <div><WorkHistory/></div>}
      {activeTab === "Tab6" && <div><Payment/></div>}
      {/* Add more content for other tabs as needed */}
    </DashboardLayout>
  );
};

export { JobSeekerDashboard, AdminDashboard, EmployeeDashboard };
