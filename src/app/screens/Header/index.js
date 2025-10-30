"use client";

import ThemeToggle from "@/app/components/ThemeToggle";
import { useRouter } from "next/navigation";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    {
      href: "/kayit-ettiklerin",
      title: "Kaydettiklerin",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507
               c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0Z"
          />
        </svg>
      ),
    },
    {
      href: "/profil",
      title: "Profil",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593
               c.55 0 1.02.398 1.11.94l.213 1.281a1.1 1.1 0 00.865.997l1.217-.456
               a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827
               c-.293.241-.438.613-.43.992v.255c-.008.378.137.75.43.991l1.004.827
               c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456
               a1.1 1.1 0 00-.865.997l-.213 1.281c-.09.543-.56.94-1.11.94H10.7
               c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.1 1.1 0 00-.865-.997l-1.217.456
               a1.125 1.125 0 01-1.369-.49L4.63 14.94a1.125 1.125 0 01.26-1.431l1.004-.827
               a1.1 1.1 0 00.43-.992v-.255a1.1 1.1 0 00-.43-.992L4.89 9.616
               a1.125 1.125 0 01-.26-1.43l1.296-2.247a1.125 1.125 0 011.37-.491l1.217.456Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z"
          />
        </svg>
      ),
    },
    {
      href: "/",
      title: "Çıkış",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5
               A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1
        onClick={() => router.push("/workouts")}
        className="font-bold text-xl tracking-wide cursor-pointer"
      >
        Fitness App
      </h1>

      <div className="hidden md:flex w-1/2">
        <SearchBar />
      </div>

      <div className="flex items-center space-x-5">
        <ThemeToggle />
        {navLinks.map(({ href, title, icon }) => (
          <Link
            key={href}
            href={href}
            title={title}
            className="transition-transform hover:scale-110 hover:text-yellow-300"
          >
            {icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
