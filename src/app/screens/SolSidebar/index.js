"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Endeks from "../../components/Endeks";
import Link from "next/link"
export default function index() {
  const pathname = usePathname();
  if (pathname === "/profil") return null;
  const link = [
    { id: 1, name: "Hesabı Sil" },
    { id: 2, name: "Hesabı Dondur" },
  ];
  return (
    <div className="w-full bg-blue-500 h-screen dark:bg-gray-800 relative p-5">

    <img
      src="https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg"
      alt=""
      width="100"
      height="100"
      className="mx-auto block rounded-full"
    />
  
    <div className="mt-5">
      <Link href="/profil">
        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
          Profil Bilgileri
        </h5>
      </Link>
  
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        <a
          href="#"
          className="inline-flex items-center px-4 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Profile Git
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </h2>
  
      <ul className="max-w-md space-y-1 text-white list-disc list-inside dark:text-gray-400">
        <li>Nickname</li>
        <li>Ad Soyad:</li>
        <li>Email:</li>
        <li>Kg:</li>
        <li>Boy:</li>
        <li>Deneyim:</li>
      </ul>
  
      <Endeks />
  
      <div className="absolute bottom-5 left-30">
        {link.map((item) => (
          <button
            key={item.id}
            className="bg-blue-500 text-white rounded-md hover:bg-blue-600 px-3 py-1"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  </div>
  
  );
}
