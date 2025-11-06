"use client";
import React from "react";

export default function TabMenu({ activeId, setActiveId, Menu }) {
  return (
    <div className="flex  justify-center">
      {Menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className={`px-6 py-2 font-semibold transition-all ${
            activeId === item.id
              ? "border-b-2  dark:border-gray border-gray dark:text-[#9CA3AF]  text-gray text-[15px]"
              : "text-[#9CA3AF] -200 dark:text-[#9CA3AF]  text-[15px]"
          }`}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
