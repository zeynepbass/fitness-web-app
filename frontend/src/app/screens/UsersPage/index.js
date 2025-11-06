
"use client";
import { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import TabMenu from "../../components/TabMenu";
export default function Index() {
  const [activeId, setActiveId] = useState(1);

  const Menu = [
    { id: 1, text: "Üye Girişi" },
    { id: 2, text: " Üye Değilsen" },
  ];

  return (
    <div className="min-h-screen ">
      <div className="flex w-full min-h-screen shadow-2xl  overflow-hidden ">
        <div className="bg-[url('/images/background.jpg')] bg-cover bg-center rounded-r-[10%]  w-1/2 flex items-center justify-center">
          <h1 className="text-white text-[30px] font-bold text-center drop-shadow-lg">
            Hoş Geldin!
          </h1>
        </div>

        <div className="min-h-screen w-1/2 flex items-center justify-center ">
        <div className="w-1/2 flex flex-col">
            <div className="w-full  bg-gray-100  pt-5 ">
              <TabMenu
                activeId={activeId}
                setActiveId={setActiveId}
                Menu={Menu}
              />
            </div>

            <div className="w-full   overflow-auto p-6 shadow-gray-100 shadow-md">
              {activeId === 1 ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
