const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const landingPageRoutes = require('./js/backend/routes/landingPage');
const errorController = require('./js/backend/controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(landingPageRoutes);
app.use(errorController.get404);

app.listen(3000, () => {
  console.log(`Server started!`)
})