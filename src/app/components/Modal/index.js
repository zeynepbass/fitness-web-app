"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const pieData = [
  { name: "Completed", value: 70 },
  { name: "Remaining", value: 30 },
];

const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 70 },
  { name: "May", value: 60 },
];
const title = [
  { id: 1, name: "Kg", value: 123 },
  { id: 2, name: "Hedef kg", value: 123 },
  { id: 3, name: " Kg farkı", value: 30 },
];

const COLORS = ["#4ade80", "#d1d5db"];

const Modal = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-4xl h-[50vh] overflow-y-auto p-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col ">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Analiz
                </h3>
              
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex justify-start gap-2 m-3">
                  {title.map((item) => (
                    <span
                      key={item.id}
                      className="flex justify-center text-center items-center bg-gray-100 gap-1 rounded-xl p-2 min-w-[80px]"
                    >
                      {item.name}<br/> {item.value}
                    </span>
                  ))}
                </div>
              <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="w-64 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="w-80 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={lineData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#4ade80"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex items-center justify-end p-4 border-t border-gray-200 dark:border-gray-600 rounded-b ">
                <button
                  type="button"
                  className="px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
