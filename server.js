const express = require('express');

const router = require('./Router/storeRouter')
const productRouter = require('./Router/productRouter')

const PORT = 8080

const app = express();

app.use(express.json());
app.use(router)
app.use(productRouter)
app.listen(PORT,() => {
  console.log(`My server is currently running on port ${PORT}`);
});



