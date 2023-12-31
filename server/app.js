if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers');
const errorHandler = require('./middlewares/errorHandler');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Jangan lupa bayar parkir bang ${PORT}`);
});
