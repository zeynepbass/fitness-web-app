import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {         
    baslik: { type: String},
    aciklama: { type: String },
    email: { type: String},
    rol: { type: String},
    resim: { type: String, default: null }, 
    kacAdim: { type: String, default: null }, 
  },
  { timestamps: true } 
);

const Post = mongoose.model("Post", postSchema);

export default Post;
