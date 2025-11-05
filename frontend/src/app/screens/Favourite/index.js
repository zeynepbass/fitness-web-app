

"use client";
import { useEffect, useState } from "react";
import Card from "../../components/Cards";

const Index = () => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourite")) || [];
    setCurrent(stored);
  }, []); 

  return (
    <div className='flex flex-row'>
      <Card posts={current} setCurrent={setCurrent} />
    </div>
  );
};

export default Index;
