const _ = require("lodash");
const { StepupQuery } = require("../queries");
const { Http } = require('../utils/http');

class StepupService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async withPassword(password) {
    const payload = StepupQuery;
    payload["variables"] = {
      password,
      deviceId: process.env.DEVICE_ID,
    };
    const result = await this._http.post(payload)
    const accessToken = _.get(result, "data.stepUpWithPassword.access_token");
    const idToken = _.get(result, "data.stepUpWithPassword.id_token");
    const token = { accessToken, idToken };
    return token;
  }
}


module.exports = { StepupService };
