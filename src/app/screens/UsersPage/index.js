
"use client";
import { useState } from "react";
import Login from "../Login";
import Register from "../Register";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex max-w-5xl h-[800px] shadow-2xl rounded-2xl overflow-hidden  bg-blue-100 ">


        <div className="bg-[url('/images/background.jpg')] bg-cover bg-center rounded-br-[5%] w-1/2 flex items-center justify-center">
          <h1 className="text-blue-800 text-[30px] font-bold text-center drop-shadow-lg">
            Hoş Geldin!
          </h1>
        </div>


        <div className="w-1/2 flex flex-col p-8 bg-blue-100 justify-center items-center  ">
          

          <div className="w-full flex justify-center bg-gray-100  pt-5 rounded-t-2xl">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 font-semibold transition-all ${
                isLogin
                  ? "border-b-2 border-black text-black text-[15px]"
                  : "text-gray-400 text-[15px]"
              }`}
            >
              Üye Girişi
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 font-semibold transition-all ${
                !isLogin
                  ? "border-b-2 border-black text-black text-[15px]"
                  : "text-gray-400 text-[15px]"
              }`}
            >
              Üye Değilsen
            </button>
          </div>


          <div className="bg-white w-full   overflow-auto p-6  rounded-b-2xl shadow-gray-100 shadow-md">
            {isLogin ? <Login /> : <Register />}
          </div>

        </div>
      </div>
    </div>
  );
};
