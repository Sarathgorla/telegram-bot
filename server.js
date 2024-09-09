const mongoose = require('mongoose');


const serverless=require("serverless-http")
const express = require('express');
const bodyParser = require('body-parser');

const bot = require('./bot.js');  // Import your bot logic

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose connection (same as before)
mongoose.connect('mongodb+srv://gorlasarathkumar667:PTjQXdqPDLu1qoMe@fullstack-blog-project.vccx3.mongodb.net/FULLSTACK-BLOG?retryWrites=true&w=majority&appName=fullstack-blog-project', {
    
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
  
  
// Start Telegram bot




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});