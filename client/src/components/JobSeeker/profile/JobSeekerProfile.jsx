import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuSun } from "react-icons/lu";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { auth } from "../../../firebase";
import useAuthUser from "../../../auth/getUser"; // Adjust the import path
import EditProfileModal from "../../../common/Modal";
import ExperienceModal from "../../../common/ExperienceModal";

const JobSeekerProfile = () => {
  const { user } = useAuthUser(auth);
  const [profileData, setProfileData] = useState(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalExOpen, setIsModalExOpen] = useState(false);

  const handleToggle = (e) => {
    if (e.target.checked) {
      // Handle toggle logic
    } else {
      // Handle toggle logic
    }
  };

  const handleEditProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleAddExperienceClick = () => {
    setIsModalExOpen(true);
  };

  const handleCloseExModal = () => {
    setIsModalExOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProfileUpdate = (updatedData) => {
    setProfileData(updatedData);
  };

  useEffect(() => {
    setProfileData(user);
  }, [user]);

  return (
    <div className="m-2 max-w-7xl mx-auto">
      {/* Part 1 */}
      <div className="md:flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div>
            <img
              src={profileData?.image}
              className="w-10 h-10 rounded-full"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[24px] font-medium">{profileData?.name}</h2>
            <div className="flex gap-1 text-[14px]">
              <p>Age: 25</p>
              <p>, Member Since 25 May 2024</p>
            </div>
          </div>
        </div>

        <div className="max-md:mt-5">
          <button className="text-[16px] font-semibold flex items-center gap-2">
            Make visible to public{" "}
            <label className="switch">
              <input onChange={handleToggle} type="checkbox" />
              <div className="slider">
                <div className="circle">
                  <LuSun className="text-warning" />
                </div>
              </div>
            </label>
          </button>
        </div>
      </div>

      {/* Part 2 */}
      <div className="md:grid grid-cols-3">
        <div className="mt-[24px] grid grid-cols-2 col-span-2">
          <div>
            <div>
              <h2 className="text-[14px]">Email Address</h2>
              <h2 className="text-[16px] text-slate-400">
                {profileData?.email}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Phone Number</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.phone_number || "null"}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Portfolio</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.portfolio || "null"}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Preferred Salary</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.salary || "null"}/hr
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Skill</h2>
              <h2 className="text-[16px] font-medium">{profileData?.skill}</h2>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[14px]">Location</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.location}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Current Job</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.current_job}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Current Company</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.current_company || "null"}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Preferred Employment</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.employment || "null"}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Skill Level</h2>
              <h2 className="text-[16px] font-medium">
                {profileData?.skill_level}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-[24px] flex flex-col">
          <button
            className="bg-[#2792A8] px-6 py-3 text-white rounded-lg hover:bg-[#1f7280]"
            onClick={handleEditProfileClick}
          >
            Edit Profile
          </button>
          <button className="btn btn-outline mt-5 border border-gray-400 text-gray-600 hover:bg-gray-200">
            Upload Resume
          </button>
          <h3 className="text-[12px] font-medium mt-5">CV-AironNew-2024</h3>
          <button className="text-red-500 mt-24 flex gap-2 hover:text-red-600">
            Delete Account <AiOutlineDelete className="text-xl" />
          </button>
        </div>
      </div>

      {/* Part 3 */}
      <div className="border border-base-200 rounded-xl p-4 mt-[24px]">
        <h2>Summary</h2>
      </div>

      {/* Part 4 */}
      <div className="border border-base-200 rounded-xl p-4 mt-[24px]">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-2 items-center">
            <PiHandbagSimpleFill className="text-4xl text-[#2792A8]" />
            <div>
              <h2 className="text-[24px]">Experience</h2>
              <h2 className="text-[14px]">
                Add experience to increase the chance of hiring
              </h2>
            </div>
          </div>
          <div>
            <button
              onClick={handleAddExperienceClick}
              className="text-[#2792A8] hover:text-[#1f7280]"
            >
              Add Experience
            </button>
          </div>
        </div>
        {/* Experience List */}
        <div className="mt-6">
          {profileData?.experience.map((m) => (
            <div
              key={m._id}
              className=" m-3 p-3 border-b-2 border-base-200  grid-cols-2 items-center gap-3"
            >
              <div className="grid grid-cols-2 items-center">
                <div>
                  <img src="" className="w-6 h-6" alt="" />
                  <div>
                    <h2 className="text-[20px]">{m.title}</h2>
                    <h2 className="text-[14px]">{m.company}</h2>
                    <h2 className="text-[14px]">
                      Dhaka Bangladesh, {m.start_date}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-end gap-2 items-center">
                  <label className="switch">
                    <input onChange={handleToggle} type="checkbox" />
                    <div className="slider">
                      <div className="circle">
                        <LuSun className="text-warning" />
                      </div>
                    </div>
                  </label>
                  <p>Show</p>
                </div>
              </div>
              <div>{m.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={profileData}
        onProfileUpdate={handleProfileUpdate}
      />
      <ExperienceModal
        isOpen={isModalExOpen}
        onClose={handleCloseExModal}
        user={profileData}
      />
    </div>
  );
};

export default JobSeekerProfile;
