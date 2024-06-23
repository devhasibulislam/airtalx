/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ButtonAll from "../button/Button";

import useAuthUser from "../../auth/getUser";
import { auth } from "../../firebase";

const JobDetails = () => {
  const { user } = useAuthUser(auth);
  const { id } = useParams();
  console.log(id);
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(jobDetails);
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/v1/api/postjobs/${id}`
        );
        setJobDetails(res.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the jobs!", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error fetching the jobs",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobDetails) {
    return <div>No job details found</div>;
  }


  return (
    <div className="mt-7 max-w-6xl mx-auto">
      <div>
        <h3 className="text-4xl font-bold">{jobDetails.job_title}</h3>
        <h4 className="mt-2">
          By <span className="text-blue-500"> {jobDetails.postby}</span>
        </h4>

        <div className="flex gap-3 items-center mt-3 mb-3">
          {/* {user?.role === "job-seeker" && (
            <ButtonAll onClick={() => handleApply(jobDetails._id)}>
              Apply this Job
            </ButtonAll>
          )} */}

          <Link to={`/apply-job/${jobDetails._id}`}>
          <ButtonAll>Apply This Job</ButtonAll>
          </Link>

          {
            !user && (
               <Link to='/login'>
                <ButtonAll>Login to apply this job</ButtonAll>
               </Link>
            )
          }

          <h3>Copy Link</h3>
        </div>

        <div>
          <h2>Company Name : AB COmpany</h2>
          <h2>Location : India</h2>
          <h2>Industry : Development</h2>
          <h2>Size Of Company : 30-40 stuff</h2>
          <h2>Job Posted: 1</h2>
          <h2>Job Filled: 2</h2>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-center">Job Details</h2>
        <div className="text-center mx-auto md:grid grid-cols-2">
          <div className="border m-3 p-3">
            <h2>Hour Per week</h2>
            <h1 className="text-2xl font-semibold text-blue-500">
              ${jobDetails.hour_per_week}/hour
            </h1>
          </div>
          <div className="border m-3 p-3">
            <h2>Employment</h2>
            <h1 className="text-2xl font-semibold text-blue-500">
              {jobDetails.job_type}
            </h1>
          </div>
          <div className="border m-3 p-3">
            <h2>Expertise Level</h2>
            <h1 className="text-2xl font-semibold text-blue-500">
              {jobDetails.experience_level}
            </h1>
          </div>
          <div className="border m-3 p-3">
            <h2>Job rate per hour</h2>
            <h1 className="text-2xl font-semibold text-blue-500">30$/hr</h1>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-center">Job Description</h2>
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur. Quam etiam ac viverra in
            vulputate suspendisse tellus leo viverra. Commodo donec convallis
            enim nulla donec tempus felis. Id et aliquam maecenas quam sagittis
            nulla urna. Libero quis sit massa ut congue rhoncus nisl urna. Eget
            massa elit non morbi ut sed congue amet. Cursus sed nisi urna mauris
            tincidunt facilisi id etiam. Pellentesque tellus auctor sapien nulla
            ullamcorper auctor id sit. Aliquam morbi urna rhoncus gravida felis
            lorem volutpat lectus. Laoreet mauris laoreet dolor egestas neque
            faucibus augue sagittis. Et dapibus dui blandit ac adipiscing nisl.
            Metus feugiat pellentesque eu tincidunt ornare mus placerat accumsan
            aliquam. Arcu egestas tellus volutpat ipsum ultrices sed.
            Pellentesque non est interdum ornare in. Aliquam auctor morbi nisi
            elementum. Eu libero erat fermentum neque nibh vel. Pharetra semper
            molestie erat velit egestas. Nunc ipsum in ac tempor ornare. Et erat
            laoreet ultricies iaculis at arcu leo dui ac. Fringilla ipsum sit
            feugiat a netus fermentum leo. Turpis nibh pellentesque augue
            pharetra nulla id hendrerit. Vitae magna sit tincidunt arcu. Nulla
            quis auctor congue scelerisque nibh donec eget. Non habitant sit et
            ut habitasse. Lectus pellentesque metus in velit ultrices enim amet
            quam leo. Et massa aliquam ipsum consectetur risus. Quis posuere
            fermentum aliquam dui integer sed molestie. Mattis diam viverra ut
            sit mi pretium fames proin. Nisl viverra cras montes feugiat in.
            Arcu proin gravida massa adipiscing malesuada orci mi at tempus.
            Enim amet maecenas tincidunt urna adipiscing aliquet faucibus est
            quis. Malesuada diam vitae tellus dolor tristique in dictum eu. Diam
            interdum et faucibus pellentesque sed duis. Rutrum placerat vel orci
            gravida viverra scelerisque. Mattis id volutpat etiam nam quis
            cursus. Viverra ullamcorper habitasse dui quam euismod et ut quam
            et. Quis ornare dictum sit vehicula. Justo id rhoncus sed vestibulum
            cursus aliquet nunc. Sagittis tortor suspendisse blandit magna.
            Nullam tristique habitant scelerisque mattis posuere enim aliquam.
            Aenean urna justo pellentesque in tincidunt scelerisque vestibulum
            et risus. Placerat neque molestie porttitor placerat at diam dui
            aliquam. At suspendisse consequat sed in nam suspendisse luctus at
            ut. Dui enim lectus blandit aliquam. Facilisi euismod vel maecenas
            interdum habitasse. Imperdiet mi vitae et turpis nibh platea at.
            Eget amet ut in nibh bibendum mi senectus sed elementum. Morbi
            ultricies aenean ut egestas nullam accumsan scelerisque lacus.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
