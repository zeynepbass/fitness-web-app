

"use client";
import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Select({ people, baslik, onChange }) { 
  const [selected, setSelected] = useState(people[0]);
  const [openSelect, setSelect] = useState(false);


  return (
    <div className="w-72">
      <label className="text-blue-400 font-bold dark:text-gray-200">
        {baslik}
      </label>

      <div className="relative mt-3 mb-3">
        <button
          type="button"
          onClick={() => setSelect(!openSelect)}
          className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span>{selected.name}</span>
          <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
        </button>

        {openSelect && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {people.map((person) => (
             <li
             key={person.id}
             onClick={() => {
               setSelected(person);
               setSelect(false);

                 onChange(person.name); 
               
             }}
             className={`flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-indigo-600 hover:text-white ${
               selected.id === person.id ? "bg-indigo-100 text-indigo-700" : ""
             }`}
           >
             <span>{person.name}</span>
             {selected.id === person.id && <CheckIcon className="h-5 w-5 text-indigo-600" />}
           </li>
           
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
