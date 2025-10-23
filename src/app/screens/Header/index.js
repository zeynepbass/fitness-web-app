"use client";

import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav className="bg-blue-400 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Fitness App</h1>
      <div className="space-x-4">
     
        <a href="/workouts">Workouts</a>
      </div>
    </nav>
  );
}
