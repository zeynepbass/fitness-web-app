
"use client";
import { useState } from "react";
import Button from "../Button";
import InputType from "../InputField";
import { useMutation } from "@tanstack/react-query";
import { create,get } from "../../services/postService";

export default function PostModal({ open, setOpen }) {
  const [file, setFile] = useState(null);
  const token =JSON.parse(localStorage.getItem("token"));
  const email = token?.kullanici?.email || "";
const rol=token?.kullanici?.rol || "";
  const [form, setForm] = useState({
    baslik: "",
    aciklama: "",
    resim: null,
    email: email,
    rol:rol
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setForm((prev) => ({
      ...prev,
      resim: selectedFile,
    }));
  };


  const mutation = useMutation({
    mutationFn: create,
    onSuccess: () => {

      alert("Gönderi başarıyla paylaşıldı!");
      setForm({ baslik: "", aciklama: "", resim: null });
      setOpen(false);
      setFile(null);
    },
    onError: (error) => {

      alert(`Gönderi paylaşılırken bir hata oluştu. ${error}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!form.baslik || !form.aciklama || !form.resim) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }
  

    const formData = new FormData();
    formData.append("baslik", form.baslik);
    formData.append("aciklama", form.aciklama);
    formData.append("rol", form.rol);
    
    formData.append("email", form.email);
    formData.append("resim", form.resim);
  

    mutation.mutate(formData);

  };
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#800020]  rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-[#9CA3AF] hover:text-[#9CA3AF] dark:hover:text-[#9CA3AF] "
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-[#9CA3AF] dark:text-[#9CA3AF] ">
          Gönderi Paylaş
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputType
            type="text"
            placeholder="Başlık girin"
            required
            name="baslik"
            value={form.baslik}
            onChange={handleChange}
          />

          <textarea
            name="aciklama"
            rows={4}
            placeholder="Açıklama girin..."
            className="w-full border-b bg-transparent placeholder-gray-400 text-[15px] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            
            value={form.aciklama}
            onChange={handleChange}
            required
          />

          <div className="flex items-center gap-2">
            <label
              htmlFor="fileInput"
              className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md"
            >
              <InputType
                id="fileInput"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#9CA3AF]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 3a2 2 0 110 4 2 2 0 010-4zm9 9H4l3-4 2 3 3-4 4 5z" />
              </svg>
              <span>Fotoğraf</span>
            </label>

            {file && (
              <span className="text-sm text-[#9CA3AF]">{file.name}</span>
            )}
          </div>

          <Button
            text={mutation.isPending ? "Gönderiliyor..." : "Gönder"}
            type="submit"
            disabled={mutation.isPending}
          />
        </form>
      </div>
    </div>
  );
}
