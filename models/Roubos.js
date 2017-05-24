var mongoose = require('mongoose');

var RouboSchema = new mongoose.Schema({
    title: String,
    brand: String,
    colour: String,
    serial: String,
    author: String,
    loc: {
      type: [Number],  // [<longitude>, <latitude>]
      index: '2d'      // create the geospatial index
      }
      //mais sobre loc: http://blog.robertonodi.me/how-to-use-geospatial-indexing-in-mongodb-using-express-and-mongoose/
});




mongoose.model('Roubo', RouboSchema);
