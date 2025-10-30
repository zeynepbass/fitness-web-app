"use client"
import Modal from "../../components/Modal"
import { useState } from 'react';
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
    setBmi(bmiValue);


    let statusText = "";
    if (bmiValue < 18.5) statusText = "Zayıf";
    else if (bmiValue >= 18.5 && bmiValue < 25) statusText = "Normal";
    else if (bmiValue >= 25 && bmiValue < 30) statusText = "Fazla Kilolu";
    else statusText = "Obez";

    setStatus(statusText);
  };
const [open,setOpen]=useState(false)
  return (
    <>

    <Modal open={open} setOpen={setOpen}/>
    <div className="max-w-md mx-auto bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-lg mt-10"
    onClick={()=>setOpen(true)}>
      <h2 className="text-md  mb-6 text-center text-gray-800 dark:text-white">
        Vücut Kitle Endeksi (BMI) Hesapla
      </h2>

      <form onSubmit={calculateBMI} >
        <InputField
          label="Kilo (kg)"
          name="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Örn: 60"
        />
        <InputField
          label="Boy (cm)"
          name="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Örn: 170"
        />

        <div className="flex justify-center pt-2">
          <Button text="Hesapla" type="submit" />
        </div>
      </form>

      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            BMI: {bmi}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{status}</p>
        </div>
      )}
    </div>    </>
  );
}
