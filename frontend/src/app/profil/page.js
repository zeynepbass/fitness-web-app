
"use client";
import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {deleteUserCold} from "../services/loginService"
import {useRouter} from "next/navigation"
export default function ProfileForm() {
  const router=useRouter();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    hedefKg: "",
    kacGun: "",
    weight: "",
    height: "",
    email: "",
    nickname: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const token=JSON.parse(localStorage.getItem("token"));
  const id=token.kullanici.id

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedData = {
      ...formData,
      adSoyad: `${formData.firstName} ${formData.lastName}`,
      resim: image,
    };
  
    delete updatedData.firstName;
    delete updatedData.lastName;
  
    try {
      await deleteUserCold(id, updatedData); 

  
      router.push("/workouts"); 
    } catch (error) {
      console.error("❌ Güncelleme hatası:", error);
    }
  };
  

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#97233F]">
<div className="w-1/2 justify-center items-center dark:bg-[#800020] bg-gray p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-8 text-center text-[#9CA3AF] dark:text-[#9CA3AF] ">
        Profil Güncelle
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <label htmlFor="profileImage" className="cursor-pointer flex flex-col items-center">
            {image ? (
              <img
                src={image}
                alt="Profil"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-400"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-[#800020] flex items-center justify-center text-[#9CA3AF]">
                Resim Seç
              </div>
            )}
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <p className="font-bold">Hedef Kütle Hesapla:</p>
        <div className="flex bg-gray-200 p-3 gap-2">
          <InputField
            name="hedefKg"
            type="number"
            value={formData.hedefKg}
            onChange={handleChange}
            placeholder="Hedef kg"
          />
          <InputField
            name="kacGun"
            type="number"
            value={formData.kacGun}
            onChange={handleChange}
            placeholder="Kaç günde verebilirsin"
          />
        </div>

        <div className="">
          <InputField
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Adınızı girin"
          />
          <InputField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Soyadınızı girin"
          />
          <InputField
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ornek@mail.com"
          />
          <InputField
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Kullanıcı adınız"
          />
          <InputField
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Örn: 60"
          />
          <InputField
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
            placeholder="Örn: 170"
          />

          <div className="md:col-span-2">
            <label className="block text-[#9CA3AF]  dark:text-[#9CA3AF]  font-semibold mb-2">
              Deneyim
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Deneyimlerinizi yazın..."
              rows="4"
              className="w-full px-4  bg-transparent py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-[#9CA3AF]  dark:text-[#9CA3AF]  focus:ring-2 focus:ring-gray-400 outline-none"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button text="Güncelle" type="submit" />
        </div>
      </form>    </div>
    </div>
  );
}
