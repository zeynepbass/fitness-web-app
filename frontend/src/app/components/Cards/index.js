
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Card({ posts,setCurrent, email, handlePin }) {
  const pathname = usePathname();



  const handleFavourite = (item) => {
    const currentFavs = JSON.parse(localStorage.getItem("favourite")) || [];
    const exists = currentFavs.some((fav) => fav._id === item._id);
    if (exists) return;

    const updated = [...currentFavs, item];
    localStorage.setItem("favourite", JSON.stringify(updated));
    setCurrent(updated); 
    console.log("✅ Favorilere eklendi:", item._id);
  };


  const handleFavouritDelete = (id) => {
    const currentFavs = JSON.parse(localStorage.getItem("favourite")) || [];
    const updated = currentFavs.filter((fav) => fav._id !== id);

    localStorage.setItem("favourite", JSON.stringify(updated));
    setCurrent(updated); 
    console.log("🗑️ Favorilerden silindi:", id);
  };

  return (
    <div className="container max-h-[650px] overflow-y-scroll scroll-smooth">
      {posts.map((item) => (
        <article
          key={item._id}
          className="p-2 m-3 w-full rounded-2xl overflow-hidden shadow-sm bg-gray dark:bg-[#800020] transition-colors"
          role="article"
        >

          <div className="flex justify-end">

            {item.email === email ? (
              <button
                className="p-3 text-xl hover:scale-110 transition-transform"
                onClick={() => handlePin(item._id)}
              >
                📌
              </button>
            ) : pathname === "/kayit-ettiklerin" ? (

              <button
                title="Favorilerden Kaldır"
                type="button"
                onClick={() => handleFavouritDelete(item._id)}
                className="p-2 hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            ) : (
  
              <button
                title="Kaydet"
                type="button"
                onClick={() => handleFavourite(item)}
                className="p-2 hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#9CA3AF] -700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </button>
            )}
          </div>


          <Image
            src={`http://localhost:5233${item.resim}`}
            alt={item.baslik || "Gönderi Görseli"}
            width={120}
            height={120}
            loading="lazy"
            className="object-cover p-2 rounded-xl transition-transform duration-300 hover:scale-105"
          />

  
          <div className="p-5">
            <header className="mb-2">
              <h3 className="text-lg font-semibold text-[#9CA3AF] -200 dark:text-[#9CA3AF] -100">
                {item.baslik} 
              </h3>
            </header>

            <p className="mt-1 text-sm text-[#9CA3AF] -600 dark:text-[#9CA3AF] -300">
              {item.aciklama}
            </p>
            {item.kacAdim && (
  <p className="mt-1 text-sm text-[#9CA3AF] -600 dark:text-[#9CA3AF] -300">
   Günlük <b>{item.kacAdim}</b> adım attım.
  </p>
)}
          </div>


          {item.email !== email && pathname !== "/kayit-ettiklerin" && (
            <footer className="flex gap-3 flex-wrap pt-2">
              <button className="flex items-center gap-1 hover:text-[#9CA3AF] -500 transition">
                👍 Beğen
              </button>
              <button className="flex items-center gap-1 hover:text-[#9CA3AF] -500 transition">
                💬 Yorum Yap
              </button>
            </footer>
          )}
        </article>
      ))}
    </div>
  );
}
