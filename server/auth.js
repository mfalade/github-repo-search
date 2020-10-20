const axios = require('axios');

const {
  GRS_GITHUB_CLIENT_ID,
  GRS_GITHUB_CLIENT_SECRET,
  GRS_OAUTH_TOKEN_URL,
  GRS_GITHUB_SECRET_KEY,
  GRS_DOMAIN,
} = process.env;

const healthcheck = (req, res) =>
  res.send({ message: 'Server is up and running 🚀', status: '✅' });

const authenticate = async (req, res) => {
  const { query } = req;
  const { code } = query;
  console.log('==> Getting access token for : ', code);
  try {
    const response = await axios.post(GRS_OAUTH_TOKEN_URL, {
      code,
      client_id: GRS_GITHUB_CLIENT_ID,
      client_secret: GRS_GITHUB_CLIENT_SECRET,
      state: GRS_GITHUB_SECRET_KEY,
    });
    console.log('==> Access token retrieved for: ', code);
    console.log('==> Access token is: ', response.data);
    res.redirect(`${GRS_DOMAIN}/auth/success?${response.data}`);
  } catch (requestError) {
    console.log('==> Request failed:', requestError);
    res.redirect(`${GRS_DOMAIN}/auth/failure`);
  }
};

exports.authenticate = authenticate;
exports.healthcheck = healthcheck;
