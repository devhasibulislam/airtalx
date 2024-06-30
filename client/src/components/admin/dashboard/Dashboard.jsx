import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [datas, setData] = useState([]);
  const [posts, setPostData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API}/userdata`
        );
        setData(res.data);
      } catch (error) {
        console.error("There was an error fetching the user!", error);
      }

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API}/postjobs`
        );
        setPostData(res.data);
      } catch (error) {
        console.error("There was an error fetching the jobs!", error);
      }
    };

    fetchJobs();
  }, []);

  const jobSeekers = datas.filter((user) => user.role === "job-seeker");
  const employers = datas.filter((user) => user.role === "employer");

  const chartData = [
    {
      name: "Job Posting",
      value: posts.length,
    },
    {
      name: "Applications Received",
      value: employers.length,
    },
  ];

  return (
    <div className="items-center h-screen">
      <div className="w-full max-w-4xl p-4 m-5 bg-white bgw rounded-lg shadow-lg">
        <div className="flex justify-between mb-3">
          <div>
            <h2 className="text-2xl">Total Job Posting</h2>
            <h2>this month</h2>
          </div>
          <div className="text-xl font-semibold">{posts.length}</div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={(props) => {
                const { payload, label } = props;
                return (
                  <div className="bg-white border p-4 rounded-md">
                    <p>{label}</p>
                    {payload &&
                      payload.map((entry, index) => (
                        <p
                          key={`entry-${index}`}
                          style={{ color: entry.color }}
                        >
                          {entry.name}: {entry.value}
                        </p>
                      ))}
                  </div>
                );
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="p-5 border border-base-300 rounded-md">
          <h2 className="text-3xl">Job Posting</h2>
          <p>(This month)</p>
          <h3 className="text-3xl font-bold">{posts.length}</h3>
          <p className="text-sm mt-2">
            Expand your reach, post a new job today.
          </p>
        </div>
        <div className="p-5 border border-base-300 rounded-md">
          <h2 className="text-3xl">Applications Received</h2>
          <p>(This month)</p>
          <h3 className="text-3xl font-bold">{employers.length}</h3>
          <p className="text-sm mt-2">
            Reach out to employers, enhance their experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
