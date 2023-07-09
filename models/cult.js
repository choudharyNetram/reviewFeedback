const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://choudharynetram:Netram7877@cluster0.advy2pl.mongodb.net/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the Sports schema
const cultSchema = new mongoose.Schema({
  secyrating: { type: Number, min: 1, max: 5, required: true },
  councilRating: { type: Number, min: 1, max: 5, required: true },
  sargamRating: { type: Number, min: 1, max: 5, required: true },
  stepUpRating: { type: Number, min: 1, max: 5, required: true },
  literaryRating: { type: Number, min: 1, max: 5, required: true },
  paletteRating: { type: Number, min: 1, max: 5, required: true },
  photographyRating: { type: Number, min: 1, max: 5, required: true },
  abinayaRating: { type: Number, min: 1, max: 5, required: true },
  vinteoRating: { type: Number, min: 1, max: 5, required: true },
  cinemathequeRating: { type: Number, min: 1, max: 5, required: true },
  orendaRating: { type: Number, min: 1, max: 5, required: true },
  quizzingRating: { type: Number, min: 1, max: 5, required: true },
  awaamRating: { type: Number, min: 1, max: 5, required: true },
  feedback: String
});

const Cult = mongoose.model("Cult", cultSchema);

module.exports = Cult;


