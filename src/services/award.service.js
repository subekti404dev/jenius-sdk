const _ = require('lodash');
const { Http } = require('../utils/http');
const { AwardQuery } = require('../queries');

class AwardService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getData() {
    const data = AwardQuery;
    const resData = await this._http.post(data);
    return _.get(resData, 'data.viewer.awards')
  }
}


module.exports = { AwardService }

