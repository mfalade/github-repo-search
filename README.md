This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# `Important`

## Getting started

Copy the contents of the `.env.example` to a `.env` file in the root of the project before starting the app.

The values provided in the `env.example` file are enough to get the app running to perform the basic search.

To use Github Oauth, you'd need a Github clientId and secret which I haven't included in this repo. I'm happy to provide those once you need them.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:e2e`

Launches a cypress test runner.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `Notes`

1. Implementing Github OAuth came with a few challenges.

The first challenge was that after a user logs in via the GitHub UI, they are redirected to this application with an authentication code as expected.

I'm supposed to exchange this code for an access_token via Github's `/login/oauth/access_token` endpoint.

The challenge is that, the API doesn't support CORS requests from the browser
[Link to issue here](https://github.com/isaacs/github/issues/330)

To resolve this, I had to create a NODEJS proxy to make the authentication request to retrieve the `access_token`

### `TODO`

- Fix console warnings introduced by React LazyLoad library
