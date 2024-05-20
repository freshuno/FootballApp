const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const landingPageRoutes = require('./backend/routes/landingPage');
const errorController = require('./backend/controllers/error');
const getTransfers = require('./backend/utils/getTransfers');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(landingPageRoutes);
app.use(errorController.get404);

const testApi = async() =>{
  const res = await getTransfers();
  console.log(res);
}

// testApi();

app.listen(3000, () => {
  console.log(`Server started!`)
})
