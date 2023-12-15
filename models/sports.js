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
const sportSchema = new mongoose.Schema({
  secyRating: { type: Number, min: 1, max: 5, required: true },
  councilRating: { type: Number, min: 1, max: 5, required: true },
  feedback: String,
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport;


