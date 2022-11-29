import express from 'express';
import configViewEngine from './routes/view engine';
import initWebRoute from './routes/admin';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//set view engine
configViewEngine(app);

//init web route
initWebRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
