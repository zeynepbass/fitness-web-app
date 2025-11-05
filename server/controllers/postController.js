
import express from "express";
import Post from "../models/post.js";

const router = express.Router();


import multer from "multer";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


export const create = [
  upload.single("resim"), 
  async (req, res) => {
    try {
      const { baslik, aciklama, email,rol } = req.body;

      if (!baslik || !aciklama) {
        return res.status(400).json({ message: "Başlık ve açıklama zorunludur." });
      }

      const yeniPost = new Post({
        baslik,
        aciklama,
        email,
        rol,
        resim: req.file ? `/uploads/${req.file.filename}` : null,
      });

      await yeniPost.save();
      res.status(201).json(yeniPost);
    } catch (err) {
      console.error("Post oluşturma hatası:", err);
      res.status(400).json({ message: err.message });
    }
  },
];


export const give = async (req, res) =>  {
  try {
    const Postlar = await Post.find();
    res.status(200).json(Postlar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const details = async (req, res) =>  {
  try {
    const Post = await Post.findById(req.params.id);
    if (!Post) return res.status(404).json({ message: "Post bulunamadı" });
    res.status(200).json(Post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export const updated = async (req, res) =>  {
  try {
    const { baslik, aciklama, resim } = req.body;
    const guncelPost = await Post.findByIdAndUpdate(
      req.params.id,
      { baslik, aciklama, resim },
      { new: true }
    );
    if (!guncelPost) return res.status(404).json({ message: "Post bulunamadı" });
    res.status(200).json(guncelPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


export const deleted = async (req, res) => {
  try {
    const silinen = await Post.findByIdAndDelete(req.params.id);
    if (!silinen) return res.status(404).json({ message: "Post bulunamadı" });
    res.status(200).json({ message: "Post başarıyla silindi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export default router;
