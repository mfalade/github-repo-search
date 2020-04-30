## Getting started

1. Copy the contents of the `.env.example` to a `.env` file in the root of the project before starting the app.

   The values provided in the `env.example` file are enough to get the app running to perform the basic search.

2. To use Github Oauth, you'd need a Github clientId and secret which I haven't included in this repo. I'm happy to provide those once you need them.
   You'd also need so start a nodejs server which would help with the authentication flow.

   For this, you'd need to run the `yarn run:all` command.
   This would launch both the client and server app.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the client app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start:server`

Runs the node server that handles Github OAuth in development mode.
The api is available on [http://localhost:3001](http://localhost:3001).

### `yarn start:all`

Launches both the client and server applications so you can easily test the OAuth flow.

### `yarn test`

Launches the unit test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:e2e`

Runs Cypress tests to completion. By default, cypress run will run all tests headlessly in the Electron browser.

### `yarn cypress:open`

Launches the Cypress test runner.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `Notes`

1.  Implementing Github OAuth came with a few challenges.

    The API doesn't support CORS requests from the browser

    [Link to issue here](https://github.com/isaacs/github/issues/330)

    To resolve this, I had to create a NODEJS server to make the authentication request to retrieve the `access_token`

### `TODO`

- Fix console warnings introduced by React LazyLoad library
