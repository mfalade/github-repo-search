const axios = require('axios');

const {
  MFALADE_SALTOKS_GITHUB_CLIENT_ID,
  MFALADE_SALTOKS_GITHUB_CLIENT_SECRET,
  MFALADE_SALTOKS_OAUTH_TOKEN_URL,
  MFALADE_SALTOKS_GITHUB_SECRET_KEY,
  MFALADE_SALTOKS_DOMAIN,
} = process.env;

const healthcheck = (req, res) =>
  res.send({ message: 'Server is up and running 🚀', status: '✅' });

const authenticate = async (req, res) => {
  const { query } = req;
  const { code } = query;
  console.log('==> Getting access token for : ', code);
  try {
    const response = await axios.post(MFALADE_SALTOKS_OAUTH_TOKEN_URL, {
      code,
      client_id: MFALADE_SALTOKS_GITHUB_CLIENT_ID,
      client_secret: MFALADE_SALTOKS_GITHUB_CLIENT_SECRET,
      state: MFALADE_SALTOKS_GITHUB_SECRET_KEY,
    });
    console.log('==> Access token retrieved for: ', code);
    console.log('==> Access token is: ', response.data);
    res.redirect(`${MFALADE_SALTOKS_DOMAIN}/auth/success?${response.data}`);
  } catch (requestError) {
    console.log('==> Request failed:', requestError);
    res.redirect(`${MFALADE_SALTOKS_DOMAIN}/auth/failure`);
  }
};

exports.authenticate = authenticate;
exports.healthcheck = healthcheck;
