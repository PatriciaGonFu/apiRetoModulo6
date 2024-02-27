const Photos = require("../model/photos");

async function getPhotos(req, res, next) {
  try {
    const photos = await Photos.find({ usuario: req.params.usuario });
    res.json(photos);
  } catch (error) {
    next(error);
  }
}

async function postPhotos(req, res, next) {
  const photo = new Photos({
    usuario: req.body.usuario,
    url: req.body.url,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  });

  try {
    const newPhoto = await photo.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    next(error);
  }
}

async function putPhotos(req, res, next) {
  try {
    const photo = await Photos.findOneAndUpdate(
      { titulo: req.params.titulo },
      { descripcion: req.body.descripcion },
      { new: true }
    );
    res.json(photo);
  } catch (error) {
    next(error);
  }
}

async function delPhotosPorUsuarioYtitulo(req, res, next) {
  try {
    await Photos.deleteOne({ usuario: req.params.usuario, titulo: req.params.titulo });
    res.json({ message: "Foto eliminada" });
  } catch (error) {
    next(error);
  }
}

async function delPhotosPorUsuario(req, res, next) {
  try {
    await Photos.deleteMany({ usuario: req.params.usuario });
    res.json({ message: "Todas las fotos del usuario han sido eliminadas" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPhotos,
  postPhotos,
  putPhotos,
  delPhotosPorUsuarioYtitulo,
  delPhotosPorUsuario
};
