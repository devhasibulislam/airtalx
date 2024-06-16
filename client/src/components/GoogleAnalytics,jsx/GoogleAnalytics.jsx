// src/components/GoogleAnalytics.jsx
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
import { Chart } from "react-google-charts";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GoogleAnalytics = () => {
  const [salesData, setSalesData] = useState(null);
  const [trafficData, setTrafficData] = useState(null);
  const [userCountryData, setUserCountryData] = useState(null);

  useEffect(() => {
    // Set demo data for the charts
    setSalesData({
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales Report",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    });

    setTrafficData({
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "User Traffic",
          data: [120, 190, 300, 500, 200, 300, 400],
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
        },
      ],
    });

    setUserCountryData([
      ["Country", "Users"],
      ["United States", 1000],
      ["India", 800],
      ["Canada", 300],
      ["United Kingdom", 200],
      ["Germany", 150],
      ["Nepal", 1150],
      ["Bangladesh", 2150],
    ]);
  }, []);

  return (
    <div className="p-4 max-w-[800px] max-h-[1390px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Google Analytics Reports</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Sales Report</h3>
        {salesData ? <Line data={salesData} /> : <p>Loading sales data...</p>}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">User Traffic</h3>
        {trafficData ? <Bar data={trafficData} /> : <p>Loading traffic data...</p>}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">User by Country</h3>
        <div className="flex">
          {userCountryData ? (
            <div className="w-3/4">
              <Chart
                chartType="GeoChart"
                data={userCountryData}
                options={{
                  colorAxis: { colors: ["#E37400", "#F9AB00"] },
                }}
                width="100%"
                height="400px"
              />
            </div>
          ) : (
            <p>Loading user country data...</p>
          )}
          {userCountryData && (
            <div className="w-1/4 ml-4">
              <h4 className="text-lg font-semibold mb-2">Top Countries</h4>
              <ul>
                {userCountryData
                  .slice(1) // Skip the header row
                  .sort((a, b) => b[1] - a[1]) // Sort by number of users
                  .map(([country, users]) => (
                    <li key={country} className="mb-1">
                      {country}: {users}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleAnalytics;
