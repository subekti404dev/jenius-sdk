const _ = require('lodash');
const { Http } = require('../utils/http');
const { BankQuery } = require('../queries');

class BankService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getList() {
    const data = BankQuery;
    const resData = await this._http.post(data);
    return _.get(resData, 'data.resources.banks.items', [])
  }
}


module.exports = { BankService }

