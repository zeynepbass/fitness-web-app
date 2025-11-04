
"use client";

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

const COLORS = ["#4ade80", "#d1d5db"];

const data = {
  pie: [
    { name: "Tamamlanan", value: 70 },
    { name: "Kalan", value: 30 },
  ],
  line: [
    { name: "Oca", value: 40 },
    { name: "Şub", value: 55 },
    { name: "Mar", value: 30 },
    { name: "Nis", value: 70 },
    { name: "May", value: 60 },
  ],
  stats: [
    { id: 1, label: "Kg", value: 123 },
    { id: 2, label: "Hedef Kg", value: 123 },
    { id: 3, label: "Kg Farkı", value: 30 },
  ],
};

export default function Modal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-4xl h-[50vh] overflow-y-auto p-4">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col">
          

          <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Analiz</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>


          <div className="flex flex-wrap gap-2 m-3">
            {data.stats.map(({ id, label, value }) => (
              <span
                key={id}
                className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-xl p-2 min-w-[80px] text-center text-sm"
              >
                <strong>{label}</strong>
                <span>{value}</span>
              </span>
            ))}
          </div>


          <div className="flex flex-col md:flex-row justify-around items-center gap-6 p-4">

            <div className="w-64 h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data.pie}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={80}
                    label
                  >
                    {data.pie.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>


            <div className="w-80 h-64">
              <ResponsiveContainer>
                <LineChart data={data.line}>
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


          <div className="flex justify-end p-4 border-t dark:border-gray-600">
            <button
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
