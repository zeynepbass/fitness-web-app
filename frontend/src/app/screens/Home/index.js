
"use client";
import { useState } from "react";
import TabMenu from "../../components/TabMenu";
import HomePage from "../../screens/HomePage";
import PostsPage from "../../screens/PostsPage";
import Select from "../../components/Select";

export default function Index({posts}) {
  const [activeId, setActiveId] = useState(1);
  const [open, setOpen] = useState(false);

  const menu = [
    { id: 1, text: "Ana Sayfa" },
    { id: 2, text: "Postların" },
  ];

  const filtre = [
    { id: 1, name: "Eğitmen" },
    { id: 2, name: "Eğitici" },
  ];
  const token=JSON.parse(localStorage.getItem("token"));
  const email=token.kullanici.email
  const filteredData=posts.filter((item)=>item.email===email)
  const renderContent = () => {
    switch (activeId) {
      case 1:
        return <HomePage posts={posts} email={email} />;
      case 2:
        return <PostsPage open={open} setOpen={setOpen}  posts={filteredData} email={email} />;
      default:
        return null;
    }
  };

  return (
    <>
      <TabMenu activeId={activeId} setActiveId={setActiveId} Menu={menu} />
      <div className="w-full pt-5">
        <div className="flex justify-end gap-3">
          {activeId === 1 ? (
            <Select people={filtre} baslik=" " />
          ) : (
            <button
              className="w-[50px] bg-blue-500 dark:bg-gray-500 text-white py-2 rounded-3xl hover:bg-blue-600"
              onClick={() => setOpen(true)}
            >
              +
            </button>
          )}
        </div>
        <div className="p-6">{renderContent()}</div>
      </div>
    </>
  );
}
