const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const { PROXY_SERVER_PORT } = process.env;

const app = express();
const port = process.env.PORT || PROXY_SERVER_PORT;
const routes = require('./routes');

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(corsMiddleware);
app.use(routes);

app.listen(port, () => {
  console.log(`Proxy server running on port :${port}`);
});
