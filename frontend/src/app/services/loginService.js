
import axios from "axios"
const PATH = process.env.NEXT_PUBLIC_BASE_PATH;
export const loginUser = async (data) => {
  const res = await axios.post(`${PATH}/login`, data)
  return res.data
}
export const registerUser=async(data)=>{
 const res=await axios.post(`${PATH}/kayit`, data)
 return res.data
}
