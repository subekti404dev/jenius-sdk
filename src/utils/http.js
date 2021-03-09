const _ = require("lodash");
const axios = require("axios");
const config = require("../../config.json");

class Http {
  _axios;
  _accessToken;
  _idToken;
  constructor(options) {
    if (options.accessToken) this._accessToken = options.accessToken;
    if (options.idToken) this._idToken = options.idToken;
    const baseURL = options.baseURL || config.baseUrl;
    this._axios = axios.create({ baseURL });
  }

  async post(data) {
    try {
      const headers = {
        "btpn-apikey": config.apiKey,
        version: config.appVersion,
        'User-Agent': 'okhttp/3.12.1'
      };
      if (this._idToken && this._accessToken) {
        headers["x-id-token"] = this._idToken;
        headers["Authorization"] = `Bearer ${this._accessToken}`;
      }
      const result = await this._axios.post("", data, { headers });
      if (result['data']['errors']) {
        throw result['data']['errors'][0]['message']
      }
      return result.data;
    } catch (error) {
      throw (
        _.get(error, "response.data") ||
        _.get(error, "response") ||
        _.get(error, "message") ||
        error
      );
    }
  }
}

module.exports = { Http };
