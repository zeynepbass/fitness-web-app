export default function Button({text}){
    return(
           <button
    type="submit"
    className="w-full dark:bg-gray-500 bg-blue-500 text-white py-2 rounded-md  hover:bg-blue-600"
  >
   {text}
  </button> 
    )

}