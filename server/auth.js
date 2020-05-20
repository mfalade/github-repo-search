const axios = require('axios');

const {
  GR_SEARCH_GITHUB_CLIENT_ID,
  GR_SEARCH_GITHUB_CLIENT_SECRET,
  GR_SEARCH_OAUTH_TOKEN_URL,
  GR_SEARCH_GITHUB_SECRET_KEY,
  GR_SEARCH_DOMAIN,
} = process.env;

const healthcheck = (req, res) =>
  res.send({ message: 'Server is up and running 🚀', status: '✅' });

const authenticate = async (req, res) => {
  const { query } = req;
  const { code } = query;
  console.log('==> Getting access token for : ', code);
  try {
    const response = await axios.post(GR_SEARCH_OAUTH_TOKEN_URL, {
      code,
      client_id: GR_SEARCH_GITHUB_CLIENT_ID,
      client_secret: GR_SEARCH_GITHUB_CLIENT_SECRET,
      state: GR_SEARCH_GITHUB_SECRET_KEY,
    });
    console.log('==> Access token retrieved for: ', code);
    console.log('==> Access token is: ', response.data);
    res.redirect(`${GR_SEARCH_DOMAIN}/auth/success?${response.data}`);
  } catch (requestError) {
    console.log('==> Request failed:', requestError);
    res.redirect(`${GR_SEARCH_DOMAIN}/auth/failure`);
  }
};

exports.authenticate = authenticate;
exports.healthcheck = healthcheck;
