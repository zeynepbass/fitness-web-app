"use client";

import { usePathname } from "next/navigation";
import Header from "../screens/header";
import Footer from "../screens/footer";

export default function Layout({ children }) {
  const pathname = usePathname();


  const hideLayout = pathname === "/" || pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
