
export default function InputField({ label, name, value, onChange, type, placeholder }) {
    return (
      <>
      <label className="text-blue-400 font-bold dark:text-gray-200">
        {label}
      </label>
      <input
        name={name}  
        type={type}
        value={value}
        onChange={onChange}
        className={ "w-full border-b placeholder-gray-400 text-[15px] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        placeholder={placeholder}
      />
    </>
    );
  }
  