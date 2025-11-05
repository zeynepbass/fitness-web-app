
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
    <div className="max-w-7xl mx-left dark:bg-gray-700 bg-white p-8 rounded-2xl shadow-xl mt-10">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Profil Güncelle
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <label htmlFor="profileImage" className="cursor-pointer flex flex-col items-center">
            {image ? (
              <img
                src={image}
                alt="Profil"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
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
        <div className="flex bg-blue-500 dark:bg-gray-600 p-3 gap-2">
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
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Deneyim
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Deneyimlerinizi yazın..."
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button text="Güncelle" type="submit" />
        </div>
      </form>
    </div>
  );
}
