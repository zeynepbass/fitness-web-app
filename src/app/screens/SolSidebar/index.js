import React from "react";

export default function index() {
  return (
    <div className="w-full bg-blue-500 min-h-screen py-[5%]">
      <a href="#">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg"
          alt=""
          width="100"
          hegiht="100"
          className="mx-auto block"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            Profil Bilgileri
          </h5>
        </a>

        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        <a
          href="#"
          className="inline-flex items-center px-4 py-3  text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Profile Git
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 ">
          <li>Nickname</li>
          <li>Ad Soyad:</li>
          <li>Email:</li>
          <li>Kg:</li>
          <li>Boy:</li>
          <li>Deneyim:</li>
        </ul>

    
      </div>
    </div>
  );
}
