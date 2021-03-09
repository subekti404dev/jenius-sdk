const _ = require('lodash');
const { Http } = require('../utils/http');
const { CardQuery } = require('../queries');

class CardService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getData() {
    const data = CardQuery;
    const resData = await this._http.post(data);
    return _.get(resData, 'data.viewer.accounts')
  }
}


module.exports = { CardService }

