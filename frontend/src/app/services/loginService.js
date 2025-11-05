
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
export const deleteUser=async(id)=>{
  const res=await axios.delete(`${PATH}/kullanici/${id}`)
  return res.data
}
export const deleteUserCold=async(id,data)=>{
  const res=await axios.put(`${PATH}/hesap/${id}`,data)
  return res.data
}
export const userCurrent=async(id)=>{
  const res=await axios.get(`${PATH}/kullanici/${id}`)
  return res.data
}
