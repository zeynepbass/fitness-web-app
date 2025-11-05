
"use client";
import { useRouter, usePathname } from "next/navigation";
import Endeks from "../../components/Endeks";
import Link from "next/link"
import {deleteUser,deleteUserCold,userCurrent} from "../../services/loginService"
import { useQuery } from '@tanstack/react-query';
export default function index() {
  const control=JSON.parse(localStorage.getItem("token"));
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/profil") return null;
  const userId=control?.kullanici?.id
  const deleteUserData=()=>{
    deleteUser(userId);
    alert("Ayrılmana Çok Üzüldük :(")
    localStorage.clear()
    router.push("/")
  }
  const coldUser=()=>{
    const data = { durum: "dondurulmuştur" };
    deleteUserCold(userId,data);
    router.push("/")
  }
  const link = [
    { id: 1, name: "Hesabı Sil", click:deleteUserData },
    { id: 2, name: "Hesabı Dondur",click:coldUser },
  ];
  const {
    data: user,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["userCurrent", userId],
    queryFn: () => userCurrent(userId),
    enabled: !!userId,
  });

  if (isLoading) return <p>Yükleniyor...</p>;
  if (isError) return <p>Bir hata oluştu.</p>;

  return (
    <div className="w-full bg-blue-500 h-screen dark:bg-gray-800 relative p-5">

{user?.resim ? (
  <img
    src={user.resim}
    alt={user?.adSoyad || "Profil Resmi"}
    width="100"
    height="100"
    className="mx-auto block rounded-full object-cover border-2 border-blue-400"
  />
) : (
  <img
    src="/default-avatar.png"
    alt="Varsayılan Profil"
    width="100"
    height="100"
    className="mx-auto block rounded-full border-2 border-blue-400"
  />
)}

  
    <div className="mt-5">

        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
          Profil Bilgileri
        </h5>

  
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        <Link
          href="/profil"
          className="inline-flex items-center px-4 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Profile Git
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </h2>
  
      <ul className="max-w-md space-y-1 text-white list-disc list-inside dark:text-gray-400">
        <li>Ad Soyad: {user?.adSoyad}</li>
        <li>Email: {user?.email}</li>
        <li>Rol: {user?.rol}</li>
        <li>Hedef gün: {user?.kacGun}</li>
        <li>Hedef kg: {user?.hedefKg}</li>
        <li>Boy: {user?.height}</li>
        <li>Ağırlık: {user?.height}</li>
      </ul>
      {control?.kullanici?.rol === "Eğitmen" && <Endeks  user={user}/>}

    
  
      <div className="absolute bottom-0 left-1 ">
        {link.map((item) => (
          <button
            key={item.id}
            className=" text-white rounded-md px-3 py-1"
            onClick={item.click}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  </div>
  
  );
}
