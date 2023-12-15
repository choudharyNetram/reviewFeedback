const express = require('express');
const bodyParser = require('body-parser');
const Sport = require('./models/sports');
const PDC = require('./models/pdc');
const IRP = require('./models/IRP');
const Tech = require('./models/tech');
const Welfare = require('./models/welfare');
const Acad = require('./models/acad');
const Cult = require('./models/cult');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    calculateAverageRatingsForAllCouncils(); // Call the function to calculate average ratings
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Function to calculate the average ratings for all councils
// ...

async function calculateAverageRatingsForAllCouncils() {
    try {
      const averageRatings = await Promise.all([
        PDC.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }]),
        Sport.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }]),
        IRP.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }]),
        Welfare.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }]),
        Tech.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }]),
        Acad.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }]),
        Cult.aggregate([{ $group: { _id: null, averageRating: { $avg: '$councilRating' } } }])
      ]);
  
      const councilNames = ['PDC', 'Sports', 'IRP', 'Welfare', 'Tech', 'Acad', 'Cult'];
  
      for (let i = 0; i < averageRatings.length; i++) {
        const councilAverageRating = averageRatings[i][0]?.averageRating || 'N/A';
        console.log(`Average Rating for ${councilNames[i]} Council: ${councilAverageRating}`);
      }
    } catch (error) {
      console.error('Error calculating average ratings:', error);
    } finally {
      mongoose.disconnect(); // Disconnect from MongoDB after the calculation is done
    }
  }
  
  // ...
  

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

// ... (remaining routes)

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


















/*const mongoose = require('mongoose');
const PDC = require('./models/pdc');  


mongoose.connect('mongodb://127.0.0.1:27017/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    calculateAverageRating();  // Call the function to calculate the average rating
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Function to calculate the average rating
async function calculateAverageRating() {
  try {
    const averageRating = await PDC.aggregate([
      {
        $group: {
          _id: null,
          averageRatingForSecy: { $avg: "$secyRating" }, 
          averageRatingForCouncil: {$avg:"$councilRating"}
        }
      }
    ]);
    console.log('Average Rating for PDC Secretary:', averageRating[0].averageRatingForSecy);
    console.log('Average Rating for PDC Council:', averageRating[0].averageRatingForCouncil);
    
  } catch (error) {
    console.error('Error calculating average rating:', error);
  } finally {
    mongoose.disconnect();  // Disconnect from MongoDB after the calculation is done
  }
}
*/