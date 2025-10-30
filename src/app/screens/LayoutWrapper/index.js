"use client";

import { usePathname } from "next/navigation";
import Header from "../Header";
import SolSidebar from "../SolSidebar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-64px)]">
        <aside className="w-80 bg-white dark:bg-gray-800 hidden md:block">
          <SolSidebar />
        </aside>

        <main className="flex-1 p-6 bg-white dark:bg-gray-800">
          {children}
        </main>
      </div>
    </>
  );
}
