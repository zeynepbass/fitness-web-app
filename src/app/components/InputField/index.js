
export default function InputField({ label, type, placeholder }) {
    return (
      <>
        <label className="text-blue-400 font-bold">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border-b placeholder-gray-400 text-[15px] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </>
    );
  }
  