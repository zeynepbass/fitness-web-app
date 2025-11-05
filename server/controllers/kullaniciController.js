import Kullanici from "../models/kullanici.js";
import bcrypt from "bcryptjs";
import multer from "multer";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, parola } = req.body;


    const kullanici = await Kullanici.findOne({ email });
    if (!kullanici) {
      return res.status(400).json({ message: "Email bulunamadı" });
    }


    const match = await bcrypt.compare(parola, kullanici.parola);
    if (!match) {
      return res.status(400).json({ message: "Parola yanlış" });
    }


    const token = jwt.sign(
      { id: kullanici._id, email: kullanici.email },
      process.env.JWT_SECRET || "secretkey123",
      { expiresIn: "1d" }
    );


    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, 
    });


    res.status(200).json({
      message: "Giriş başarılı",
      kullanici: {
        id: kullanici._id,
        ad: kullanici.ad,
        email: kullanici.email,
        rol: kullanici.rol,
      },
      token, 
    });
  } catch (error) {
    res.status(500).json({ message: "Giriş yapılamadı", error: error.message });
  }
};

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads"); 
      
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });
  
  export const upload = multer({ storage });
  
  export const kayitOl = async (req, res) => {
    try {
      const { adSoyad, email, parola, rol } = req.body;
  
      if (!email || !parola) {
        return res.status(400).json({ message: "Email ve parola gerekli" });
      }
  
      const mevcutKullanici = await Kullanici.findOne({ email });
      if (mevcutKullanici) {
        return res.status(400).json({ message: "Bu email zaten kayıtlı" });
      }
  
      const hashedParola = await bcrypt.hash(parola, 10);
      const yeniKullanici = new Kullanici({
        adSoyad: adSoyad, 
        email,
        parola: hashedParola,
        rol: rol || "eğitmen",
        resim: req.file ? req.file.filename : null,
      });
  
      await yeniKullanici.save();

      res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu", yeniKullanici });
    } catch (error) {
      res.status(500).json({ message: "Kullanıcı oluşturulamadı", error: error.message });
    }
  };
export const kullaniciDetay = async (req, res) => {
  try {
    const { id } = req.params;
    const detay = await Kullanici.findById(id);
    if (!detay) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    res.status(200).json(detay);
  } catch (err) {
    res.status(500).json({ message: "Detaylar getirilemedi", error: err.message });
  }
};




export const kullaniciGuncelle = [
  upload.single("resim"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        adSoyad,
        email,

        kullaniciAdi,
        weight,
        height,
        hedefKg,
        kacGun,
        deneyim,
        rol,
        resim,
        durum,
      } = req.body;

      let updateData = {};

      
      if (durum === "dondurulmuştur") {
        updateData.durum = "dondurulmuştur";
      } else {
        updateData = {
          adSoyad,
          email,
  
          kullaniciAdi,
          weight,
          height,
          hedefKg,
          kacGun,
          deneyim,
          rol,
          resim,
          durum,
        };

        if (req.file) {
          updateData.resim = req.file.filename;
        }

      }

      const guncellenmisKullanici = await Kullanici.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );

      if (!guncellenmisKullanici) {
        return res.status(404).json({ message: "Kullanıcı bulunamadı" });
      }

      res.status(200).json({
        message:
          durum === "dondurulmuştur"
            ? "Kullanıcı hesabı donduruldu"
            : "Kullanıcı başarıyla güncellendi",
        kullanici: guncellenmisKullanici,
      });
    } catch (error) {
      res.status(500).json({
        message: "Kullanıcı güncellenemedi",
        error: error.message,
      });
    }
  },
];



export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const kullanici = await Kullanici.findByIdAndDelete(id);

    if (!kullanici) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    res.status(200).json({ message: "Kullanıcı başarıyla silindi" });
  } catch (error) {
    res.status(500).json({ message: "Silme işlemi başarısız", error: error.message });
  }
};
