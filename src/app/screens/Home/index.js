"use client";
import { useState } from "react";
import TabMenu from "../../components/TabMenu";
import HomePage from "../../screens/HomePage";
import PostsPage from "../../screens/PostsPage";
import Select from "../../components/Select";
export default function Index() {
  const [activeId, setActiveId] = useState(1);

  const Menu = [
    { id: 1, text: "Ana Sayfa" },
    { id: 2, text: "Postların" },
  ];
  const filtre = [
    { id: 1, name: "Eğitmen" },
    { id: 2, name: "Eğitici" },
  ];
  return (
    <>

    <TabMenu activeId={activeId} setActiveId={setActiveId} Menu={Menu} />
    <div className="w-full pt-5 ">

      <div className="flex justify-end ">
        <Select people={filtre} baslik=" " />
      </div>

      <div className="p-6">
        {activeId === 1 && <HomePage />}
        {activeId === 2 && <PostsPage />}
      </div>
    </div>   
     </>
  );
}
