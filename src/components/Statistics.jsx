"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");
    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

// Stats data
const stats2024 = [
  { label: "Total Projects", value: 42, color: "#F97316" }, // orange
  { label: "Engineering & Construction", value: 28, color: "#10B981" }, // green
  { label: "Only Engineering", value: 8, color: "#3B82F6" }, // blue
  { label: "Only Construction", value: 6, color: "#8B5CF6" }, // purple
];

const stats2025 = [
  { label: "Total Projects", value: 65, color: "#F97316" },
  { label: "Engineering & Construction", value: 40, color: "#10B981" },
  { label: "Only Engineering", value: 15, color: "#3B82F6" },
  { label: "Only Construction", value: 10, color: "#8B5CF6" },
];

const StatisticsPie = () => {
  return (
    <>
      <FontsStyle />
      <section className="relative py-12 bg-gray-50 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 sm:p-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full inline-flex shadow-lg">
                <ArrowTrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-2">
              Our Achievements And Projections
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-roboto text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Visual representation of our achievements and projected growth.
            </p>
          </div>

          {/* Pie Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 2024 Pie */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 text-orange-500">
                2024 Achievements
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stats2024}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {stats2024.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* 2025 Pie */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 text-blue-500">
                2025 Projections
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stats2025}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {stats2025.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsPie;

// "use client";
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

// // Google Fonts
// const FontsStyle = () => (
//   <style jsx global>{`
//     @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");
//     .font-roboto {
//       font-family: "Roboto", sans-serif;
//     }
//     .font-playfair {
//       font-family: "Playfair Display", serif;
//     }
//   `}</style>
// );

// // Combined stats data
// const combinedStats = [
//   {
//     label: "Total Projects",
//     2024: 42,
//     2025: 65,
//   },
//   {
//     label: "Engineering & Construction",
//     2024: 28,
//     2025: 40,
//   },
//   {
//     label: "Only Engineering",
//     2024: 8,
//     2025: 15,
//   },
//   {
//     label: "Only Construction",
//     2024: 6,
//     2025: 10,
//   },
// ];

// const StatisticsBar = () => {
//   return (
//     <>
//       <FontsStyle />
//       <section className="relative py-12 bg-gray-50 w-full overflow-hidden">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           {/* Header */}
//           <div className="mb-12">
//             <div className="flex justify-center mb-4">
//               <div className="p-4 sm:p-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full inline-flex shadow-lg">
//                 <ArrowTrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//               </div>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-2">
//               Our Achievements & Projections
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg font-roboto text-gray-700 max-w-3xl mx-auto leading-relaxed">
//               Compare our 2024 achievements with 2025 projected growth.
//             </p>
//           </div>

//           {/* Combined Bar Chart */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <ResponsiveContainer width="100%" height={400}>
//               <BarChart
//                 data={combinedStats}
//                 margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="label" tick={{ fontSize: 14 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend verticalAlign="top" height={36} />
//                 <Bar dataKey="2024" fill="#F97316" name="2024 Achievements" />
//                 <Bar dataKey="2025" fill="#3B82F6" name="2025 Projections" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default StatisticsBar;
