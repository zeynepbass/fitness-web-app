"use client";
import React from "react";

export default function Card() {
  return (
    <article
      className="max-w-md w-full rounded-2xl overflow-hidden shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors"
      role="article"
      aria-label="sfvsd"
    >
      <img
        src="fdvd"
        alt="İMAGE"
        className="w-full h-[100]  object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <div className="p-5">
        <header className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Başlık
          </h3>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            açıklama
          </p>
        </header>



        <footer className="flex gap-3 flex-wrap">
          <button>BEGENİ</button>
          <button>YORUM YAP</button>
          <button>KAYIT ET</button>
        </footer>
      </div>
    </article>
  );
}
