"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Endeks from "../../components/Endeks";
import { useMutation } from "@tanstack/react-query";
import Modal from "../../components/PostModalAım";
import {
  deleteUser,
  deleteUserCold,
  userCurrent,
} from "../../services/loginService";

export default function Sidebar() {
  const [control, setControl] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("token");
      if (stored) {
        setControl(JSON.parse(stored));
      }
    }
  }, []);

  const userId = control?.kullanici?.id;

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userCurrent", userId],
    queryFn: () => userCurrent(userId),
    enabled: !!userId,
  });

  useEffect(() => {
    if (!user?.baslangicTarihi || !user?.kacGun) return;

    const startDate = new Date(user.baslangicTarihi);
    const today = new Date();
    const diffDays = Math.ceil(
      Math.abs(today - startDate) / (1000 * 60 * 60 * 24)
    );

    if (diffDays > user.kacGun) setShowWarning(true);
  }, [user]);

  const deleteUserData = () => {
    deleteUser(userId);
    alert("Ayrılmana Çok Üzüldük :(");
    localStorage.clear();
    router.push("/");
  };

  const coldUser = () => {
    deleteUserCold(userId, { durum: "dondurulmuştur" });
    router.push("/");
  };
  const mutation = useMutation({
    mutationFn: ({ id, data }) => deleteUserCold(id, data),
    onSuccess: (data) => {
      console.log("✅ başarılı:", data);
    },
    onError: (error) => {
      console.error("❌ hata", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      hedefKg: 0,
      kacGun: 0,
    };

    mutation.mutate({ id: userId, data: form });
  };

  if (pathname === "/profil" || !control) return null;
  if (isLoading) return <p>Yükleniyor...</p>;
  if (isError) return <p>Bir hata oluştu.</p>;

  const link = [
    { id: 1, name: "Hesabı Sil", click: deleteUserData },
    { id: 2, name: "Hesabı Dondur", click: coldUser },
  ];

  return (
    <div className="w-80 md:block hidden  bg-[#800020] h-screen dark:bg-[#800020] relative p-5">
      <img
        src={user?.resim || "/default-avatar.png"}
        alt={user?.adSoyad || "Profil Resmi"}
        width="100"
        height="100"
        className="mx-auto block rounded-full object-cover "
      />

      <div className="mt-5">
        <h5 className="text-2xl font-bold text-center text-[#9CA3AF] -200 dark:text-[#9CA3AF] ">
          Profil Bilgileri
        </h5>

        <h2 className="mb-2 text-lg font-semibold text-[#9CA3AF] -200 dark:text-[#9CA3AF] ">
          <Link
            href="/profil"
            className="inline-flex items-center px-4 py-3 text-sm font-medium dark:bg-[#97233F] bg-[#800020] text-[#9CA3AF]  rounded-lg hover:bg-[#800020] "
          >
            Profile Git
          </Link>
        </h2>

        <ul className="text-[#9CA3AF]  list-disc list-inside space-y-1">
          <li>Ad Soyad: {user?.adSoyad}</li>
          <li>Email: {user?.email}</li>
          <li>Rol: {user?.rol}</li>
          <li>Hedef gün: {user?.kacGun}</li>
          <li>Hedef kg: {user?.hedefKg}</li>
          <li>Boy: {user?.height}</li>
          <li>Ağırlık: {user?.weight}</li>
        </ul>
        {open && <Modal setOpen={setOpen} open={open} />}
        {showWarning &&    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="p-4 bg-red-600 rounded-lg text-[#9CA3AF]  font-semibold text-center animate-pulse shadow-lg w-[90%] max-w-md">
            ⚠️ Hedef gün sayısını aştınız! Yeni bir hedef belirleme zamanı 💪
            <div className="flex gap-2 mt-3">
              <button
                className="w-full p-4 bg-gray-400 text-[#9CA3AF] -800 font-semibold rounded-xl hover:bg-[#800020] hover:text-[#9CA3AF]  disabled:bg-gray-300"
                onClick={() => setOpen(true)}
              >
                Post Olarak Yayınla
              </button>
              <button
                className="w-full p-4 bg-gray-200 text-[#9CA3AF] -800 font-semibold rounded-xl hover:bg-[#800020] hover:text-[#9CA3AF]  disabled:bg-gray-300"
                onClick={handleSubmit}
              >
                Yayınlama
              </button>
            </div>
          </div>
        </div>}
     

        {control?.kullanici?.rol === "Eğitmen" && <Endeks user={user} />}

        <div className="absolute bottom-0 left-1">
          {link.map((item) => (
            <button
              key={item.id}
              className="text-[#9CA3AF]  rounded-md px-3 py-1"
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
