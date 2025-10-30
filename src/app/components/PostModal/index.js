import { useState } from 'react';
import Button from "../Button";
import InputType from "../InputField";
const index = ({open,setOpen}) => {
  const [file, setFile] = useState(null);
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title?.value || "";
      const description = e.target.description?.value || "";
      console.log("Gönderi:", title, description, file);
      setOpen(false);
    };
  
  return (
    <div>
       {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Gönderi Paylaş
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <InputType type="text" placeholder="Başlık girin" required />

              <textarea
                name="description"
                rows={4}
                placeholder="Açıklama girin..."
                className="w-full   border-b  placeholder-gray-400 text-[15px] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <div className="flex items-center gap-2">
                <label
                  htmlFor="fileInput"
                  className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md"
                >
                  <InputType
                    type="file"
                    placeholder="Başlık girin"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    required
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 3a2 2 0 110 4 2 2 0 010-4zm9 9H4l3-4 2 3 3-4 4 5z" />
                  </svg>
                  <span>Fotoğraf / Video</span>
                </label>
                {file && (
                  <span className="text-sm text-gray-600">{file.name}</span>
                )}
              </div>

              <Button text="Gönder" type="submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default index
