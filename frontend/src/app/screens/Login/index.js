
"use client";
import { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { loginUser } from "../../services/loginService";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router=useRouter();
  const [form, setForm] = useState({
    email: "",
    parola: "",
  });


  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("✅ Giriş başarılı:", data);

      localStorage.setItem("token", JSON.stringify(data));
      router.push("/workouts")
      alert("Giriş başarılı!");
    },
    onError: (error) => {
      console.error("❌ Giriş hatası:", error);
      alert("Giriş başarısız, bilgilerinizi kontrol edin!");
    },
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
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
