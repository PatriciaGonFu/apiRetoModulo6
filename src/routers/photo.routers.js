const express = require("express");
const router = express.Router();
const photosController = require("../controller/photo.controller"); 


router.get("/photos/:usuario", photosController.getPhotos); 
router.post("/photos", photosController.postPhotos); 
router.put("/photos/:titulo", photosController.putPhotos); 
router.delete("/photos/:usuario/:titulo", photosController.delPhotosPorUsuarioYtitulo); 
router.delete("/photos/:usuario", photosController.delPhotosPorUsuario); 

module.exports = router;
