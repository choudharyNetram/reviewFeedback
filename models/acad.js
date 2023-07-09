const mongoose = require('mongoose');

// Connect to MongoDB

///       mongodb://127.0.0.1:27017
mongoose.connect('mongodb+srv://choudharynetram:Netram7877@cluster0.advy2pl.mongodb.net/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the Sports schema
const acadSchema = new mongoose.Schema({
  secyRating: { type: Number, min: 1, max: 5, required: true },
  councilRating: { type: Number, min: 1, max: 5, required: true },
  feedback: String,
});

const Acad = mongoose.model("Acad", acadSchema);

module.exports = Acad;


