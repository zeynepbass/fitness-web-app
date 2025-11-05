import mongoose from "mongoose";

const kullaniciSchema = new mongoose.Schema({
 adSoyad:{ type: String },
  email: { type: String },
  parola: { type: String },
  kullaniciAdi: { type: String },
  weight:{ type: Number },
  height:{ type: Number },
  hedefKg:{ type: Number },
  kacGun:{ type: Number },
  deneyim:{ type: String },
  rol: { type: String,default:"" },
  resim: { type: String,default:null},
  durum:{ type: String,default:null},
  id:{type:String}
});

const Kullanici = mongoose.model("Kullanici", kullaniciSchema);

export default Kullanici; 
