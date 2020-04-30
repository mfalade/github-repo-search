import axios from 'axios';

import { GITHUB } from 'app/config';
import { getAccessToken } from 'app/lib/auth';

class GithubClient {
  _instance = null;

  constructor() {
    this.createInstance();
  }

  createInstance() {
    console.log(getAccessToken(), 'aceesss token...');
    this.instance = axios.create({
      baseURL: GITHUB.API_URL,
      headers: {
        Authorization: {
          toString() {
            return `token ${getAccessToken()}`;
          },
        },
      },
    });
  }

  refreshInstance() {
    this.createInstance();
  }

  set instance(value) {
    this._instance = value;
  }

  get instance() {
    return this._instance;
  }
}

export default new GithubClient();
