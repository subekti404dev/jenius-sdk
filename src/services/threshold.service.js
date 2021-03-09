const _ = require('lodash');
const { Http } = require('../utils/http');
const { ThresholdQuery } = require('../queries');

class ThresholdService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getThreshold() {
    const data = ThresholdQuery.Get;
    const resData = await this._http.post(data);
    return _.get(resData, 'data.viewer.preferences')
  }

  async setThreshold(amount) {
    const data = ThresholdQuery.Set;
    data["variables"] = {amount,"clientType":"PERSONAL"}
    const resData = await this._http.post(data);
    return _.get(resData)
  }
}

module.exports = { ThresholdService }

