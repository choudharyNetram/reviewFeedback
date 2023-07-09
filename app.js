const express = require('express');
const bodyParser = require('body-parser');
const Sport = require('./models/sports');
const PDC = require('./models/pdc') ; 
const IRP = require('./models/IRP') ; 
const Tech = require('./models/tech') ; 
const Welfare = require('./models/welfare') ; 
const Acad = require('./models/acad') ; 
const Cult = require('./models/cult') ; 

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/sports', (req, res) => {
  res.render('sports');
});

app.get("/acad", (req,res) =>{
  res.render("acad") ; 
}) ;

app.get('/tech', (req, res) => {
  res.render('tech');
});

app.get("/welfare", (req,res) =>{
  res.render("welfare") ; 
}) ;
app.get('/pdc', (req, res) => {
  res.render('pdc');
});

app.get("/IRP", (req,res) =>{
  res.render("IRP") ; 
}) ;
app.get('/cult', (req, res) => {
  res.render('cult');
});


app.post('/sports', async (req, res) => {
  // Create a new Sport document from the website
  const secretaryRat = req.body.secyRating;
  const councilRat = req.body.councilRating;
  const feedback = req.body.feedback;
  
  const rating = new Sport({
    secyRating: secretaryRat,
    councilRating: councilRat,
    feedback: feedback
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      //alert("your response submitted") ; 
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});


app.post('/pdc', async (req, res) => {
  // Create a new Sport document from the website
  
  const secretaryR = req.body.secyRating;
  const councilR = req.body.councilRating;
  const feedbak = req.body.feedback;          
  const rating = new PDC({
    secyRating: secretaryR,
    councilRating: councilR,
    feedback: feedbak
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});


app.post('/IRP', async (req, res) => {
  // Create a new Sport document from the website
  const secretaryRat = req.body.secyRating;
  const councilRat = req.body.councilRating;
  const feedback = req.body.feedback;
  
  const rating = new IRP({
    secyRating: secretaryRat,
    councilRating: councilRat,
    feedback: feedback
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});

app.post('/welfare', async (req, res) => {
  // Create a new Sport document from the website
  const secretaryRat = req.body.secyRating;
  const councilRat = req.body.councilRating;
  const feedback = req.body.feedback;
  
  const rating = new Welfare({
    secyRating: secretaryRat,
    councilRating: councilRat,
    feedback: feedback
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});


app.post('/tech', async (req, res) => {
  // Create a new Sport document from the website
  const secretaryRat = req.body.secyRating;
  const councilRat = req.body.councilRating;
  const metisR = req.body.metisRating ; 
  const meanMechR = req.body.meanMechRating;
  const digisR = req.body.digisRating;
  const odysseyR = req.body.odysseyRating ;
  const anveshnamR = req.body.Anveshanam;
  const graspR = req.body.graspRating;
  const MLGroupR = req.body.mlGroup ;
  const feedback = req.body.feedback;

  const rating = new Tech({
    secyRating: secretaryRat,
    councilRating: councilRat,
    metisRating: metisR , 
    meanMechRating:meanMechR ,
    digisRating: digisR,
    odysseyRating:odysseyR,
    Anveshanam:  anveshnamR ,
    graspRating: graspR  ,
    mlGroup: MLGroupR  ,
    feedback: feedback
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});


app.post('/cult', async (req, res) => {
  // Create a new Sport document from the website
  const secretaryRat = req.body.secyRating;
  const councilRat = req.body.councilRating;
  const sargamR = req.body.sargamRating;
  const stepUpR = req.body.stepUpRating;
  const literaryR = req.body.literaryRating;
  const paletteR = req.body.paletteRating;
  const photographyR = req.body.photographyRating;
  const abinayR = req.body.abinayaRating;
  const vinteoR = req.body.vinteoRating;
  const cinemathequeR = req.body.cinemathequeRating;
  const orendaR = req.body.orendaRating;
  const quizzingR = req.body.quizzingRating;
  const awaamR = req.body.awaamRating;
  const feedback = req.body.feedback;
  
  const rating = new Cult({
    secyrating: secretaryRat,
    councilRating: councilRat,
    sargamRating: sargamR , 
    stepUpRating: stepUpR , 
    literaryRating:literaryR ,
    paletteRating:  paletteR,
    photographyRating: photographyR  ,
    abinayaRating: abinayR ,
    vinteoRating:  vinteoR ,
    cinemathequeRating:cinemathequeR  ,
    orendaRating:  orendaR ,
    quizzingRating:quizzingR   ,
    awaamRating:  awaamR ,
    feedback: feedback
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});


app.post('/acad', async (req, res) => {
  // Create a new Sport document from the website
  const secretaryRat = req.body.secyRating;
  const councilRat = req.body.councilRating;
  const feedback = req.body.feedback;
  
  const rating = new Acad({
    secyRating: secretaryRat,
    councilRating: councilRat,
    feedback: feedback
  });

  rating.save()
    .then(() => {
      console.log("Successfully saved the item in the database");
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error saving the item in the database:', error);
      res.redirect('/');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


























/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the Sports schema
const sportSchema = new mongoose.Schema({
  secyrating: { type: Number, min: 0, max: 5, required: true },
  councilRating: { type: Number,min: 0, max: 5 , required: true },
  feedback: String,
  
});
const Sport = mongoose.model("Sport", sportSchema) ; 
// Create a new Sport document
const newSport = new Sport({
  secyrating: 4,
  councilRating: 3,
  feedback: "this is the best council"
});

// Save the new Sport document to the database
newSport.save()
  .then(() => {
    console.log("Successfully saved the item in the database");
    
  })
  .catch((error) => {
    console.error('Error saving the item in the database:', error);
    
  });

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/sports', (req, res) => {
  res.render('sports');
});

app.post('/sports', async (req, res) => {
  // Create a new Sport document from the website 
    const secretaryRat = req.body.secyrating ; 
    const councilRat  = req.body.councilRating ; 
    const feedback = req.body.feedback ; 
    const rating = new Sport({
      secyrating: secretaryRat,
      councilRating: councilRat,
      feedback: feedback
    });
    rating.save() ; 

  
  // Redirect to the '/sports' page
   res.redirect('/sports');
});


// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


*/

