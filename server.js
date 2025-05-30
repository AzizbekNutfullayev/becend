const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// 🔧 Bu yer to‘g‘rilandi:
const bookRoute = require('./routers/bookRoute');

// 🔗 Router
app.use('/bo', bookRoute);

// 🔊 Server start
app.listen(4000, () => {
  console.log('Amringizga mumtazirman');
});
