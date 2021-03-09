const _ = require('lodash');
const { Http } = require('../utils/http');
const { TransferQuery } = require('../queries');

class TransferService {
  _http;
  constructor(token) {
    this._http = new Http({accessToken: token.accessToken, idToken: token.idToken});
  }

  async send(bankId, accountNumber, amount) {
    const forecastPayload = TransferQuery.Forecast;
    forecastPayload["variables"] = {
      bankId, // 123
      accountNumber, // "0083403044"
      amount, // 10001,
      isBusiness: false
    }
    const resData = await this._http.post(forecastPayload);
    const data = _.get(resData, 'data.forecastPayment');

    if (data) {
      const senditPayload = TransferQuery.Sendit;
      senditPayload["variables"] = {
        input: {
          sourceAccountId: "90012128054",
          targetAccountId: accountNumber,
          targetAccountHolderName: data["accountHolderName"],
          bankId: bankId,
          amount,
          note: "",
          categoryId: "998",
          forecastChecksum: data["checksum"],
          isBusiness: false
        }
      };
      const resData = await this._http.post(senditPayload);
      return _.get(resData, 'data');
    }
  }
}


module.exports = { TransferService }

