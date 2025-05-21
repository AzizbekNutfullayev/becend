const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const bookRoute = require('../backend/routers/bookRoute')

app.use('/bo',bookRoute)

app.listen(4000,()=>{
    console.log(' Amringizga mumtazirman ');
 })