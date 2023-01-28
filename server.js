const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/postcom');
const cRoutes = require('./routes/createpost');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(cRoutes);

const PORT = 2000;
const DB_URL = 'mongodb+srv://Admin:shadmin@cluster0.tjs5meu.mongodb.net/communitygroup?retryWrites=true&w=majority';
// communitygroup
// shadmin
mongoose.set('strictQuery', false);  
mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, () =>{
    console.log('App is running on' , PORT);
});



// "server": "nodemon server.js",
// "client": "npm run start --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\""
