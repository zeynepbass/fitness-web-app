import mongoose from "mongoose";

const kullaniciSchema = new mongoose.Schema({
 adSoyad:{ type: String },
  email: { type: String },
  parola: { type: String },
  kullaniciAdi: { type: String },
  rol: { type: String,default:"Eğitmen" },
  cupa:{ type: Number,default:0 },
  comment:{ type: String,default:null },
  resim: { type: String,default:null},
  durum:{ type: String,default:null},
  id:{type:String}
});

const Kullanici = mongoose.model("Kullanici", kullaniciSchema);

export default Kullanici; 
