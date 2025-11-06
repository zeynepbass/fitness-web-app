
export default function Button({ text, onClick, type = "button", disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full text-white dark:bg-[#FFE9E3]  bg-[#800020]  dark:text-[#9CA3AF] -500 font-semibold py-2 rounded-xl "
    >
      {text}
    </button>
  );
}
