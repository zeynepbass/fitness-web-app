

"use client";
import { useState,useEffect } from "react";
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

  const people = [
    { id: 1, name: "TÜMÜ" },
    { id: 2, name: "Eğitmen" },
    { id: 3, name: "Eğitici" },
  ];
  const token=JSON.parse(localStorage.getItem("token"));
  const email=token.kullanici.email

  



  const filteredData=posts.filter((item)=>item.email===email )


  const [sortedPosts, setSortedPosts] = useState(filteredData);


  useEffect(() => {
    const saved = localStorage.getItem("sortedPosts");
    if (saved) {
      setSortedPosts(JSON.parse(saved));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("sortedPosts", JSON.stringify(sortedPosts));
  }, [sortedPosts]);

  const handlePin = (id) => {
    const clickedPost = sortedPosts.find((p) => p._id === id);
    const remainingPosts = sortedPosts.filter((p) => p._id !== id);
    const updated = [clickedPost, ...remainingPosts];
    setSortedPosts(updated);
  }
  const [selected, setSelected] = useState(people[0]);
  const onChange = (name) => {
    const secilen = people.find((p) => p.name === name);
    setSelected(secilen);
  };
  
  const filteredPeople =
  selected.name !== "TÜMÜ"
    ? posts.filter((item) => item.rol === selected.name)
    : posts;

  const renderContent = () => {
    switch (activeId) {
      case 1:
        return <HomePage posts={filteredPeople}  email={email} />;
      case 2:
        return <PostsPage open={open} setOpen={setOpen} handlePin={handlePin}  posts={sortedPosts} email={email} />;
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
            <Select people={people} selected={selected} setSelected={setSelected} onChange={onChange}/>
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
