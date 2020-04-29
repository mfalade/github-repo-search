const express = require('express');
const dotenv = require('dotenv');
const qs = require('qs');
const https = require('https');

const app = express();

dotenv.config();
const {
  REACT_APP_GITHUB_CLIENT_ID,
  REACT_APP_GITHUB_CLIENT_SECRET,
  REACT_APP_GITHUB_SECRET_KEY,
  OAUTH_HOST,
  OAUTH_PORT,
  OAUTH_PATH,
  OAUTH_METHOD,
  PROXY_SERVER_PORT,
  REACT_APP_DOMAIN,
} = process.env;
const port = process.env.PORT || PROXY_SERVER_PORT;

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

function authenticate(code) {
  const payload = qs.stringify(
    {
      code,
      grant_type: 'authorization_code',
      client_id: REACT_APP_GITHUB_CLIENT_ID,
      client_secret: REACT_APP_GITHUB_CLIENT_SECRET,
      state: REACT_APP_GITHUB_SECRET_KEY,
      redirect_uri: `${REACT_APP_DOMAIN}/oauth`,
      code_verifier: REACT_APP_GITHUB_SECRET_KEY,
    },
    { encode: false },
  );
  const reqOptions = {
    host: OAUTH_HOST,
    port: OAUTH_PORT,
    path: OAUTH_PATH,
    method: OAUTH_METHOD,
    headers: {
      'content-length': payload.length,
      'User-Agent': 'Node-oauth',
    },
  };

  return new Promise((resolve, reject) => {
    let result = '';
    const request = https.request(reqOptions);
    request.on('response', (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => (result += chunk));
      response.on('close', () => resolve(qs.parse(result)));
      response.on('end', () => resolve(qs.parse(result)));
    });

    request.write(payload);
    request.end();
    request.on('error', (e) => reject(e.message));
  });
}

app.use(corsMiddleware);
app.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: 'Server is up and running 🚀', status: '✅' });
});
app.get('/authenticate/:code', async (req, res) => {
  try {
    const response = await authenticate(req.code);
    res.status(200).send(response);
  } catch (apiError) {
    res.status(500).send(apiError);
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port :${port}`);
});
