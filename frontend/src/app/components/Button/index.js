
export default function Button({ text, onClick, type = "button", disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full dark:bg-[#800020] text-gray font-semibold py-2 rounded-xl hover:bg-[#800020] "
    >
      {text}
    </button>
  );
}
