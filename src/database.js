let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/photos')

.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error)=> {
    console.log(error)
})