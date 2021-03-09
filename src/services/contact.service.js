const _ = require('lodash');
const { Http } = require('../utils/http');
const { ContactQuery } = require('../queries');

class ContactService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getList(keyword = null, offset = 0, limit = 50) {
    const payload = ContactQuery;
    const filter = { "isBusiness": false }
    if (keyword) {
      filter["displayName"] = keyword;
      filter["cashtag"] = keyword;
      filter["bankName"] = keyword;
    }
    payload['variables'] = { limit, offset, filter }
    const resData = await this._http.post(payload);
    const data = _.get(resData, 'data.viewer.contacts.items', [])
    const total = _.get(resData, 'data.viewer.contacts.total', 0)
    return { data, total, limit, offset }
  }
}


module.exports = { ContactService }

