
export default function Button({ text, onClick, type = "button", disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 disabled:bg-gray-300"
    >
      {text}
    </button>
  );
}
