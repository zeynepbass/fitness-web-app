
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header";
import SolSidebar from "../SolSidebar";
import Login from "../Login/index"
export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [queryClient] = useState(() => new QueryClient());
 const control=JSON.parse(localStorage.getItem("token"));
  return (
    <QueryClientProvider client={queryClient}>
      {pathname === "/" ? (
     
    
        <>{children}</>
      ) : (

        <>
          <Header />
          <div className="flex min-h-[calc(100vh-64px)]">
            <aside className="w-80 bg-white dark:bg-gray-800 hidden md:block">
              <SolSidebar />
            </aside>

            <main className="flex-1 p-6 bg-white dark:bg-gray-800">
              {control ? children : <Login/>}
    
            </main>
          </div>
        </>
      )}
    </QueryClientProvider>
  );
}
