import express from "express";
import * as post from "../controllers/postController.js";
import * as kayit from "../controllers/kullaniciController.js";
const router = express.Router();


// !post


router.put("/post/:id", post.updated);
router.get("/post", post.give);
router.post("/post", post.create);
router.get("/post/:id", post.deleted);
// !kullanıcı
router.get("/kullanici/:id", kayit.kullaniciDetay);
router.delete("/kullanici/:id", kayit.deleteUser);
router.post("/login", kayit.login);
router.post("/kayit", kayit.kayitOl);
router.put("/hesap/:id", kayit.kullaniciGuncelle);


export default router;
