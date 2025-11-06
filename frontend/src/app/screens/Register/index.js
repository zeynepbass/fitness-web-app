

"use client";
import { useMutation } from "@tanstack/react-query";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { registerUser } from "../../services/loginService";
import { useState } from "react";
export default function Register() {
  const people = [
    { id: 1, name: "Eğitmen" },
    { id: 2, name: "Eğitici" },
  ];

  const [form, setForm] = useState({
    adSoyad: "",
    email: "",
    parola: "",
    rol: "",
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("✅ Kayıt başarılı:", data);
      alert("Kayıt başarılı! Giriş yapabilirsiniz.");
     
    },
    onError: (error) => {
      console.error("❌ Kayıt hatası:", error);
      alert("Kayıt başarısız, bilgilerinizi kontrol edin!");
    },
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (value) => {
    setForm({
      ...form,
      rol: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
<Select
  people={people}
  baslik="Seçim"
  onChange={(value) => handleSelect(value)}
/>



      <InputField
        label="Ad Soyad"
        type="text"
        name="adSoyad"
        placeholder="Adınız Soyadınız"
        value={form.adSoyad}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Emailiniz"
        value={form.email}
        onChange={handleChange}
      />

      <InputField
        label="Parola"
        type="password"
        name="parola"
        placeholder="Parolanız"
        value={form.parola}
        onChange={handleChange}
      />
<Button
  type="submit"
  text={mutation.isPending ? "Kayıt Yapılıyor..." : "Kayıt Ol"}
  disabled={mutation.isPending}
/>

    </form>
  );
}
