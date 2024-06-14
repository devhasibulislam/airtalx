import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuthUser from "../auth/getUser";
import { auth } from "../firebase";
import Swal from "sweetalert2";

const EditProfileModal = ({ isOpen, onClose, users }) => {
  const { user } = useAuthUser(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.put(`http://localhost:8080/v1/api/userdata/${user?._id}`, data);
      console.log('Updated profile data:', response.data);
      onClose();
     if(response.data){
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Profile updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
     }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill</label>
            <input
              type="text"
              {...register("skill", { required: "skill is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your Skill"
            />
            {errors.skill && <p className="text-red-500 text-xs mt-1">{errors.skill.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Level</label>
            <input
              type="text"
              {...register("skill_level", { required: "skill level is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your Skill"
            />
            {errors.skill && <p className="text-red-500 text-xs mt-1">{errors.skill.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phone_number", { required: "Phone Number is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your Phone Number"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Current Job</label>
            <input
              type="text"
              {...register("current_job", { required: "Current Job is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your role"
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Company</label>
            <input
              type="text"
              {...register("current_company", { required: "Current Company is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your role"
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Portfolio</label>
            <input
              type="text"
              {...register("portfolio", { required: "Portfolio Job is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your role"
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">EmployMent</label>
            <input
              type="text"
              {...register("employment", { required: "Employment Job is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your role"
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              type="text"
              {...register("salarry", { required: "Salary Job is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your role"
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>
          

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="btn btn-error"
              onClick={onClose}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-warning"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
