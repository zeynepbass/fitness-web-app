
"use client";
import { useState } from "react";
import Modal from "../Charts";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function BMICalculator() {
  const [open, setOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState({ bmi: null, status: "" });

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    const status =
      bmi < 18.5
        ? "Zayıf"
        : bmi < 25
        ? "Normal"
        : bmi < 30
        ? "Fazla Kilolu"
        : "Obez";

    setResult({ bmi, status });
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} />

      <div
        className="max-w-md mx-auto bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-lg mt-10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <h2 className="text-md mb-6 text-center text-gray-800 dark:text-white font-semibold">
          Vücut Kitle Endeksi (BMI) Hesapla
        </h2>

        <form onSubmit={calculateBMI} className="space-y-4">
          <InputField
            label="Kilo (kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Örn: 60"
          />
          <InputField
            label="Boy (cm)"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Örn: 170"
          />
          <div className="flex justify-center">
            <Button text="Hesapla" type="submit" />
          </div>
        </form>

        {result.bmi && (
          <div className="mt-6 text-center text-gray-800 dark:text-white">
            <p className="text-lg font-semibold">BMI: {result.bmi}</p>
            <p className="text-gray-600 dark:text-gray-300">{result.status}</p>
          </div>
        )}
      </div>
    </>
  );
}
