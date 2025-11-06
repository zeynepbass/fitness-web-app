import InputType from "../../components/InputField";

export default function Index() {
  return (
    <div className="w-full flex items-center relative">
      <InputType
        type="text"
        placeholder="Ara..."
 
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-4 text-[#9CA3AF] cursor-pointer hover:text-[#9CA3AF] transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}
