const _ = require('lodash');
const { Http } = require('../utils/http');
const { AccountQuery } = require('../queries');

class AccountService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }
  
  async check(bankCode, number) {
    const data = AccountQuery.Check;
    data["variables"] = {
      bankCode,
      number
    }
    const resData = await this._http.post(data);
    return _.get(resData, 'data')
  }
}


module.exports = { AccountService }

