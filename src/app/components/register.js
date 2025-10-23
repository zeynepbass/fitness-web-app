export default function Register() {
  return (
    <form className="space-y-4 p-4">
      <label className="text-blue-400 font-bold">Ad Soyad</label>
      <input
        type="text"
        placeholder="Adınız Soyadınız"
        className="w-full border-b placeholder-gray-400 text-[15px]  border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label className="text-blue-400 font-bold">Email</label>
      <input
        type="email"
        placeholder="Emailiniz"
        className="w-full border-b placeholder-gray-400 text-[15px]  border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label className="text-blue-400 font-bold">Parola</label>
      <input
        type="password"
        placeholder="Parolanız"
        className="w-full border-b placeholder-gray-400 text-[15px]  border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md  hover:bg-blue-600"
      >
        Kayıt Ol
      </button>
    </form>
  );
}
