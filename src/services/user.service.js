const _ = require('lodash');
const { Http } = require('../utils/http');
const { UserQuery } = require('../queries');

class UserService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getData() {
    const data = UserQuery;
    const resData = await this.http.post(data);
    return _.get(resData, 'data.viewer')
  }
}

module.exports = { UserService }

