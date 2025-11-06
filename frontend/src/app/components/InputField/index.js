
export default function InputField({ label, name, value, onChange, type, placeholder }) {
    return (
      <>
      <label className="text-[#9CA3AF] font-bold dark:text-[#9CA3AF] ">
        {label}
      </label>
      <input
        name={name}  
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border-b rounded-md bg-white  dark:bg-transparent placeholder-gray-400 text-[15px] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        
        placeholder={placeholder}
      />
    </>
    );
  }
  