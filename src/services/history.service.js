const _ = require('lodash');
const { Http } = require('../utils/http');
const { HistoryQuery } = require('../queries');

class HistoryService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async getList(keyword = null, offset = 0, limit = 50) {
    const payload = HistoryQuery;
    const transactionFilter = { "includeInternal": false, "categoryIds": [], "transactionTypeIds": [] }
    if (keyword) {
      transactionFilter["searchText"] = keyword;
    }
    payload['variables'] = { limit, offset, transactionFilter }
    const resData = await this._http.post(payload);
    const data = _.get(resData, 'data.viewer.accounts[0].transactions.items', [])
    const total = _.get(resData, 'data.viewer.accounts[0].transactions.total', 0)
    return { data, total, limit, offset }
  }
}


module.exports = { HistoryService }

